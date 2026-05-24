import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Progress counter animation simulation (0 to 100)
    const duration = 3200;
    const target = 100;
    const step = duration / target;
    let count = 0;
    
    const initialDelay = setTimeout(() => {
      const timer = setInterval(() => {
        count++;
        if (count < 100) {
          setProgress(count);
        }
        if (count >= target) clearInterval(timer);
      }, step);
      return () => clearInterval(timer);
    }, 1800);

    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const fallback = setTimeout(handleLoad, 8000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallback);
        clearTimeout(initialDelay);
      };
    }

    return () => clearTimeout(initialDelay);
  }, []);

  // WebGL Setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const VS = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

    const FS = `
    precision highp float;
    uniform float T;
    uniform vec2  R;

    vec3 hsl(float h,float s,float l){
      vec3 k=mod(vec3(0.,8.,4.)+h*12.,12.);
      vec3 a=vec3(s)*min(l,1.-l);
      return l-a*clamp(min(k-3.,9.-k),0.,1.)*sign(vec3(1));
    }

    void main(){
      vec2 uv=(gl_FragCoord.xy - R*.5) / min(R.x,R.y);

      /* very subtle slow drift — keeps it alive without leaving screen */
      vec2 drift = vec2(0.018*sin(T*.14+.3), 0.013*sin(T*.11+1.8));
      uv -= drift;

      float r   = length(uv);
      float phi = atan(uv.y, uv.x);

      /* ── AMOEBA MORPH ── */
      float m = 0.0;
      m += 0.042 * sin(phi*1.0 + T*0.19 + 0.5);
      m += 0.030 * sin(phi*2.0 - T*0.14 + 1.3);
      m += 0.018 * sin(phi*3.0 + T*0.23 + 2.1);

      /* slow breath ±1.2% */
      float base  = 0.410 + 0.012*sin(T*0.38);
      float ringR = base + m;

      float dist = abs(r - ringR);

      /* ── 3-D LIGHTING ── */
      float lit = 0.52 + 0.48*clamp(cos(phi - T*0.05 - 0.8)*0.5+0.5, 0.,1.);

      /* ── AURORA COLOUR along the ring (Shifting to Blue/Cyan theme) ── */
      float a1 = sin(phi*1.0 + T*.38)*.5+.5;
      float a2 = sin(phi*2.0 - T*.55)*.5+.5;
      float aur = a1*.6 + a2*.4;

      // Blue ring locked to #0072FF with subtle animated intensity
      vec3 brandBlue = vec3(0.0, 114.0/255.0, 1.0);
      vec3 ringCol = brandBlue * (0.72 + 0.28 * aur) * lit;
      vec3 haloCol = vec3(0.01, 0.05, 0.16) * lit; // Very dark navy halo

      /* ── GLOW LAYERS ── */
      float g0 = exp(-dist*130.);   /* tight bright core  */
      float g1 = exp(-dist* 42.);   /* inner soft halo    */
      float g2 = exp(-dist* 13.);   /* wider glow  */
      float g3 = exp(-dist*  3.8);  /* very wide          */

      vec3 col = vec3(0.);
      col += ringCol * g0 * 2.4;
      col += ringCol * g1 * 0.75;
      col += haloCol * g2 * 0.40;
      col += vec3(0.003, 0.012, 0.05) * g3 * 0.18; // Deep dark navy outer glow

      /* ── INNER PURPLE FILL — stays inside the ring ── */
      float inside = smoothstep(ringR+.025, ringR-.04, r);
      float fade = 1. - (r / max(ringR,.001));
      col += vec3(0.05, 0.015, 0.20) * inside * pow(fade, 1.8) * 0.70;
      col += vec3(0.02, 0.005, 0.10) * inside * exp(-r*3.5) * 0.80;

      /* ── OUTSIDE SCATTERED LIGHT ── */
      float outside = smoothstep(ringR-.01, ringR+.15, r);
      col += vec3(0.001, 0.003, 0.02) * (1.-outside) * g3 * 0.07;

      /* tone map + gamma */
      col = 1.0 - exp(-col * 1.15);
      col = pow(col, vec3(1./2.2));

      /* Add the brand #0A0F1C background color */
      col += vec3(10.0/255.0, 15.0/255.0, 28.0/255.0);

      gl_FragColor = vec4(col, 1.);
    }
    `;

    function mk(type,src){
      const s=gl.createShader(type);
      gl.shaderSource(s,src);gl.compileShader(s);
      if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))console.error(gl.getShaderInfoLog(s));
      return s;
    }
    const prog=gl.createProgram();
    gl.attachShader(prog,mk(gl.VERTEX_SHADER,VS));
    gl.attachShader(prog,mk(gl.FRAGMENT_SHADER,FS));
    gl.linkProgram(prog);gl.useProgram(prog);

    gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    const ap=gl.getAttribLocation(prog,'p');
    gl.enableVertexAttribArray(ap);
    gl.vertexAttribPointer(ap,2,gl.FLOAT,false,0,0);

    const uT=gl.getUniformLocation(prog,'T');
    const uR=gl.getUniformLocation(prog,'R');

    let animationFrameId;
    function resize(){
      if(!canvasRef.current) return;
      const c = canvasRef.current;
      const dpr=Math.min(window.devicePixelRatio||1,2);
      c.width=window.innerWidth*dpr; c.height=window.innerHeight*dpr;
      c.style.width=window.innerWidth+'px'; c.style.height=window.innerHeight+'px';
      gl.viewport(0,0,c.width,c.height);
    }
    resize();
    window.addEventListener('resize',resize);

    const t0=performance.now();
    function loop(){
      if(!canvasRef.current) return;
      const c = canvasRef.current;
      const t=(performance.now()-t0)/1000;
      gl.uniform1f(uT,t);
      gl.uniform2f(uR,c.width,c.height);
      gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
      animationFrameId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0A0F1C] overflow-hidden"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <style>{`
            .ui {
              position: fixed; top: 50%; left: 50%;
              transform: translate(-50%, -50%);
              text-align: center; pointer-events: none;
              font-family: 'Outfit', sans-serif;
              z-index: 10;
              display: flex; flex-direction: column; align-items: center; gap: 4px;
            }

            .brand {
              font-size: clamp(.9rem, 2vw, 1.35rem);
              font-weight: 200; letter-spacing: .3em;
              text-transform: uppercase;
              color: rgba(255, 255, 255, .92);
              opacity: 1;
            }
            .s1 {
              font-size: clamp(.52rem, 1vw, .65rem);
              font-weight: 300; letter-spacing: .4em;
              text-transform: lowercase;
              color: rgba(90, 160, 200, 0.5);
              margin-top: 6px;
              opacity: 1;
            }
            .s2 {
              font-size: clamp(.52rem, 1vw, .65rem);
              font-weight: 200; letter-spacing: .4em;
              text-transform: lowercase;
              color: rgba(90, 140, 220, 0.45);
              opacity: 1;
            }
            .prog {
              display: flex; align-items: center; gap: 10px;
              margin-top: 30px;
              opacity: 1;
            }
            .bar {
              width: 3px; border-radius: 2px;
              background: linear-gradient(180deg, #00C6FF, #0052D4);
            }
            .num {
              font-size: .65rem; font-weight: 300;
              letter-spacing: .2em;
              color: rgba(255, 255, 255, 0.8);
            }
          `}</style>
          
          <canvas ref={canvasRef} className="block fixed top-0 left-0 w-full h-full pointer-events-none" />

          <div className="ui">
            <div className="brand">Mehza SmartTech</div>
            <div className="s1">a new possibility</div>
            <div className="s2">for smart solutions</div>
            <div className="prog">
              <div className="bar"></div>
              <div className="num">{progress}%</div>
            </div>
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;