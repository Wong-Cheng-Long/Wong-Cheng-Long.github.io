window.EscapeCommon=(()=>{
  const KEY='sp_escape_progress_v1';
  const get=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}};
  const set=(p)=>localStorage.setItem(KEY,JSON.stringify(p));
  const reset=()=>localStorage.removeItem(KEY);
  const toast=(msg,type='ok')=>{const el=document.createElement('div');el.className=`toast ${type}`;el.innerHTML=`<div class=dot></div><div>${msg}</div>`;document.body.appendChild(el);setTimeout(()=>el.remove(),2200)};
  const timer=(seconds,onTick,onEnd)=>{let left=seconds,t=null;const start=()=>{if(t)return;onTick?.(left);t=setInterval(()=>{left--;onTick?.(left);if(left<=0){stop();onEnd?.()}},1000)};
    const stop=()=>{if(t){clearInterval(t);t=null}};
    const setLeft=(s)=>{left=s;onTick?.(left)};
    const getLeft=()=>left;
    return{start,stop,setLeft,getLeft};
  };
  const complete=(id,clue)=>{const p=get();p[id]={completed:true,clue,completedAt:Date.now()};set(p)};
  const back=(ms=700)=>setTimeout(()=>location.href='../index.html',ms);
  return{getProgress:get,setProgress:set,resetProgress:reset,toast,createTimer:timer,completeGame:complete,backToHub:back};
})();
