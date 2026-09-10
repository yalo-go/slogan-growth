const $=id=>document.getElementById(id),today=new Date(),fields=['product','audience','value','proof'];
const briefs=[{product:'清泉水',audience:'怕白水没味的人',value:'自然回甘',proof:'森林水源'},{product:'清火凉茶',audience:'爱吃辣的人',value:'吃辣不上火',proof:'草本配方'},{product:'一生印记婚戒',audience:'准备求婚的人',value:'故事刻进戒指',proof:'可刻指纹'},{product:'小耳朵点读笔',audience:'小学生家长',value:'一点就会',proof:'8000词句'},{product:'行家说',audience:'职场新人',value:'真人经验解答',proof:'职业认证'},{product:'醒一醒冷萃',audience:'怕苦的上班族',value:'提神不苦',proof:'12小时冷萃'},{product:'满格能量棒',audience:'忙到没空吃饭的人',value:'快速顶饿',proof:'10克蛋白质'},{product:'多一格收纳架',audience:'租房青年',value:'不打孔收纳',proof:'承重20公斤'},{product:'续航饮料',audience:'控糖熬夜的人',value:'零糖提神',proof:'80毫克咖啡因'},{product:'本真面霜',audience:'敏感肌',value:'温和修护',proof:'无酒精香精'}];
const modes={slogan:{name:'Slogan',items:[],max:40,min:4,ideal:[6,16],title:'看完10条，再连续写3版。',place:['先写直觉版本，不要反复修改。','换一个角度，突出价值或痛点。','再压缩一次，尝试更强的节奏。'],checks:['哪一句3秒就记住','哪一句价值最清楚','哪一句最想念出来','哪一句最想让人行动']},tvc:{name:'TVC广告',items:[],max:500,min:60,ideal:[90,260],title:'仿写一支30秒TVC：画面、旁白、收束。',place:['写出场景和人物，再推进冲突。','换一种叙事结构，强化情绪转折。','精简旁白，让品牌在结尾自然出现。'],checks:['开头哪个画面抓住你','故事如何发生转折','产品价值如何进入情节','结尾如何留下品牌']},long:{name:'长文案',items:[],max:1200,min:120,ideal:[180,700],title:'仿写一篇长文案：洞察、展开、落点。',place:['从真实场景或人群洞察开篇。','换一个结构，让价值和证据逐步出现。','删掉空话，写出更有力量的结尾。'],checks:['开头为什么想继续读','洞察是否说中了人','证据是否支撑承诺','结尾是否完成升华或行动']}};
let mode='slogan',dailyIndex=Math.floor(today.getTime()/86400000)%10,daily=briefs[dailyIndex];
$('day').textContent=`DAY ${String(today.getDate()).padStart(2,'0')} · 今日训练`;
function records(){return JSON.parse(localStorage.getItem('slogan-attempts')||'[]')}
function esc(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const focusNames={value:'价值表达',evidence:'可信证据',action:'购买行动',rhythm:'节奏记忆',concise:'信息压缩',scene:'画面感',turn:'情绪转折',close:'品牌收束',hook:'开头抓力',structure:'结构递进'};
const focusBriefs={value:[0,2,4],evidence:[5,6,7,8],action:[1,3,4],rhythm:[0,1,6],concise:[0,5,8],scene:[2,3,7],turn:[1,2,9],close:[0,4,8],hook:[2,5,9],structure:[3,6,9]};
function inferWeakness(x){const s=(x.text||x.slogan||'').trim(),m=x.mode||'slogan',weak=[];if(m==='slogan'){if(s.length>16)weak.push('concise');if(!includesAny(s,x.value||''))weak.push('value');if(!/(喝|吃|选|来|用|买|试|点|让|给|就|上)/.test(s))weak.push('action');if(!/[，！？、]/.test(s)&&s.length>10)weak.push('rhythm')}else if(m==='tvc'){if(!/(清晨|深夜|镜头|画面|此刻|突然|后来|多年|这时|最后)/.test(s))weak.push('scene');if(!/(却|但是|直到|原来|不是|而是|终于|没想到)/.test(s))weak.push('turn');if(!includesAny(s,x.value||''))weak.push('value');if(x.proof&&!includesAny(s,x.proof))weak.push('evidence');if(!/(最后|于是|从此|现在|让|我们|今天)/.test(s))weak.push('close')}else{if(!/[？?]/.test(s)&&!/(有些|我们|你是否|当你|不是每|曾经)/.test(s))weak.push('hook');if(!/(所以|但是|其实|直到|因为|不是|而是|也许|真正)/.test(s))weak.push('structure');if(!includesAny(s,x.value||''))weak.push('value');if(x.proof&&!includesAny(s,x.proof))weak.push('evidence');if(!/(现在|今天|因此|从此|选择|开始)/.test(s))weak.push('close')}return [...new Set(weak)]}
function learningProfile(){const all=records().filter(x=>(x.mode||'slogan')===mode).slice(-30);if(!all.length)return{focus:null,count:0,index:dailyIndex};const tally={};all.forEach((x,i)=>{const weight=1+i/all.length+(100-(x.score||60))/50;(x.weaknesses||inferWeakness(x)).forEach(k=>tally[k]=(tally[k]||0)+weight)});const focus=Object.entries(tally).sort((a,b)=>b[1]-a[1])[0]?.[0]||null,list=focusBriefs[focus]||[dailyIndex];return{focus,count:all.length,index:list[all.length%list.length]}}
const readingKey='source-reading-v1';
let sourceFilter='all';
function readReading(){
  try { const saved=JSON.parse(localStorage.getItem(readingKey)||'{}'); return {seen:Array.isArray(saved.seen)?saved.seen:[],views:saved.views&&typeof saved.views==='object'?saved.views:{}}; }
  catch { return {seen:[],views:{}}; }
}
function saveReading(state){localStorage.setItem(readingKey,JSON.stringify(state))}
function sourcePool(){return sourceCases.filter(c=>sourceFilter==='all'||c.source===sourceFilter)}
function readingViewKey(){return mode+':'+sourceFilter}
function chooseCases(state){
  const pool=sourcePool().filter(c=>!state.seen.includes(c.id));
  pool.sort((a,b)=>Number(b.modes.includes(mode))-Number(a.modes.includes(mode)));
  return pool.slice(0,10).map(c=>c.id);
}
function renderCases(){
  const state=readReading(),key=readingViewKey(),pool=sourcePool();
  const available=new Set(pool.filter(c=>!state.seen.includes(c.id)).map(c=>c.id));
  let current=(state.views[key]||[]).filter(id=>available.has(id));
  if(!current.length)current=chooseCases(state);
  state.views[key]=current;saveReading(state);
  const list=current.map(id=>sourceCases.find(c=>c.id===id)).filter(Boolean);
  const read=pool.filter(c=>state.seen.includes(c.id)).length;
  $('reading-label').textContent='01 / 真实案例阅读';
  $('reading-title').textContent='先看案例，再练表达。';
  $('reading-progress').textContent='当前来源共 '+pool.length+' 个案例 · 已看 '+read+' 个 · 本批 '+list.length+' 个';
  $('next-cases').disabled=!list.length;
  $('review-cases').hidden=read===0;
  const names={slogan:'短句 / 海报',tvc:'广告片',long:'长文案 / 品牌叙事'};
  $('case-list').innerHTML=list.length?list.map((c,i)=>'<article class="case-row external-case"><span>'+String(i+1).padStart(2,'0')+'</span><div><small class="case-source">'+esc(c.source)+' · '+c.modes.map(m=>names[m]).join(' / ')+'</small><h3>'+esc(c.title)+'</h3><p>'+esc(c.summary)+'</p><p class="case-focus">学一个点：'+esc(c.focus)+'</p><a href="'+esc(c.url)+'" target="_blank" rel="noopener noreferrer">到'+esc(c.source)+'看原文 / 视频</a></div></article>').join(''):'<div class="reading-empty"><h3>这一批收录已经看完</h3><p>不会自动回到第一批。可以去下方两站浏览更多案例，或点击“重新复习”主动重看。</p></div>';
}
function advanceCases(show=true){
  const state=readReading(),key=readingViewKey();
  state.seen=[...new Set([...state.seen,...(state.views[key]||[])])];
  delete state.views[key];saveReading(state);
  if(show)renderCases();
}
function renderMode(){const m=modes[mode],profile=learningProfile();dailyIndex=profile.index;daily=briefs[dailyIndex];document.body.dataset.mode=mode;document.querySelectorAll('.mode-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));$('practice-title').textContent=m.title;$('adaptive-note').innerHTML=profile.focus?`根据你最近 <b>${profile.count}</b> 次${m.name}练习，今天重点训练：<strong>${focusNames[profile.focus]}</strong>。命题已按这个弱项更新。`:`完成第一次${m.name}练习后，系统会根据你的失分点自动更新下一道命题。`;m.checks.forEach((x,i)=>$('check'+(i+1)).textContent=x);renderCases();fields.forEach(id=>$(id).value=daily[id]);['draft1','draft2','draft3'].forEach((id,i)=>{$(id).value='';$(id).maxLength=m.max;$(id).placeholder=m.place[i]});$('result').hidden=true;$('improve-panel').hidden=true;ready()}
document.querySelectorAll('.mode-tabs button').forEach(b=>b.onclick=()=>{mode=b.dataset.mode;renderMode()});
$('next-cases').onclick=()=>advanceCases();
$('source-filter').onchange=()=>{sourceFilter=$('source-filter').value;renderCases()};
$('review-cases').onclick=()=>{
  const state=readReading(),ids=new Set(sourcePool().map(c=>c.id));
  state.seen=state.seen.filter(id=>!ids.has(id));state.views={};
  saveReading(state);renderCases();
};
function stats(){const r=records();$('average').textContent=r.length?Math.round(r.reduce((a,x)=>a+x.score,0)/r.length):'—';$('count').textContent=r.length?`已完成 ${r.length} 次训练`:'完成第一次训练后生成';const days=new Set(r.map(x=>x.date));let streak=0,d=new Date();while(days.has(d.toISOString().slice(0,10))){streak++;d.setDate(d.getDate()-1)}$('streak').textContent=streak}
function includesAny(s,text){return text.split(/[，。；、\s]/).filter(x=>x.length>=2).some(w=>s.includes(w))}
function evaluate(s){const m=modes[mode],n=s.length;let score=100,p=[],good=[];if(n<m.min){score-=25;p.push(`${n}字太短，${m.name}需要完整表达，建议至少写到${m.min}字。`)}else if(n>m.ideal[1]){score-=10;p.push(`目前${n}字，信息偏散。删除重复句，把篇幅控制在${m.ideal[1]}字左右。`)}else good.push('篇幅能承载当前训练目标。');if(!includesAny(s,daily.value)){score-=20;p.push('核心价值没有被清楚表达。读完仍不知道产品究竟带来什么不同。')}else good.push('产品价值已进入表达，不只是情绪或口号。');if(mode!=='slogan'&&!includesAny(s,daily.proof)){score-=12;p.push('缺少具体证据，承诺还停留在自说自话。')}else if(mode!=='slogan')good.push('使用了事实或产品细节，可信度更高。');if(mode==='slogan'){if(n>16){score-=14;p.push('Slogan超过16字，三秒读取和复述都会变难。')}if(!/[，！？、]/.test(s)&&n>10){score-=7;p.push('缺少口语停顿，读起来发平。')}if(!/(喝|吃|选|来|用|买|试|点|让|给|就)/.test(s)){score-=9;p.push('缺少动作或明确结果，更像介绍，不像广告语。')}else good.push('有动作或结果，具备传播推动力。');if(!s.includes(daily.product)){score-=10;p.push('没有绑定产品名，换成竞品也可能成立。')}else good.push('产品名与核心价值已经绑定。')}else if(mode==='tvc'){if(!/(清晨|深夜|镜头|画面|此刻|突然|后来|多年|这时|最后)/.test(s)){score-=12;p.push('没有清晰的画面推进或时间变化，旁白像一段说明文字。')}else good.push('有可拍摄的场景与叙事推进。');if(!/(却|但是|直到|原来|不是|而是|终于|没想到)/.test(s)){score-=10;p.push('故事没有转折，情绪从头到尾是一条直线。')}if(!/(最后|于是|从此|现在|让|我们|品牌|今天)/.test(s)){score-=8;p.push('结尾缺少品牌收束或行动落点。')}}else{if(!/[？?]/.test(s)&&!/(有些|我们|你是否|当你|不是每|曾经)/.test(s)){score-=10;p.push('开头缺少问题、场景或洞察，第一段抓力不足。')}else good.push('开头具备洞察或阅读钩子。');if(!/[。！？]\s*\n/.test(s)&&n>220){score-=8;p.push('全文没有分段，阅读压力大；按洞察、展开、证据、结尾重新分层。')}if(!/(所以|但是|其实|直到|因为|不是|而是|也许|真正)/.test(s)){score-=9;p.push('观点缺少递进或转折，像把几句话并排放在一起。')}else good.push('表达有递进，能带着读者向结论前进。')}score=Math.max(20,Math.min(100,score));return{score,verdict:score>=90?'成熟，已接近可发布':score>=80?'方向正确，但还能更锋利':score>=65?'基本成立，结构和表达仍有明显问题':'不合格，建议按反馈重写',problems:p.slice(0,4),strengths:good.slice(0,3)}}
function ready(){$('submit').disabled=!['draft1','draft2','draft3'].some(id=>$(id).value.trim())}
['draft1','draft2','draft3'].forEach(id=>$(id).addEventListener('input',ready));
$('submit').onclick=()=>{const drafts=['draft1','draft2','draft3'].map((id,i)=>({text:$(id).value.trim(),version:i+1})).filter(x=>x.text),results=drafts.map(x=>({...x,...evaluate(x.text)})),best=results.slice().sort((a,b)=>b.score-a.score)[0],all=records();results.forEach(x=>{const record={...daily,...x,slogan:x.text,mode,date:new Date().toISOString().slice(0,10)};record.weaknesses=inferWeakness(record);all.push(record)});localStorage.setItem('slogan-attempts',JSON.stringify(all));$('score').textContent=best.score;$('verdict').textContent=best.verdict;$('draft-scores').innerHTML=results.map(x=>`<article><span>版本${x.version}</span><strong>${esc(x.text)}</strong><b>${x.score}分</b><small>${x.verdict}</small></article>`).join('');$('problems').innerHTML=best.problems.map((p,i)=>`<p><b>${i+1}</b>${p}</p>`).join('')||'<p>没有明显硬伤，继续打磨语言的独特性。</p>';$('strengths').innerHTML=best.strengths.map(p=>`<p>✓ ${p}</p>`).join('');$('result').hidden=false;$('result').scrollIntoView({behavior:'smooth'});stats();advanceCases()};
$('rewrite').onclick=()=>{$('result').hidden=true;$('draft1').focus()};
function samples(){if(mode==='slogan')return [`${daily.value}，就选${daily.product}`,`${daily.product}，让${daily.value}`,`${daily.product}，${daily.value}就好`];if(mode==='tvc')return [`清晨，主人公正被难题困住。镜头跟随他的动作，直到${daily.product}出现。${daily.value}，因为${daily.proof}。现在，把从容还给每一个普通日子。`,`画面一，是忙乱的早晨；画面二，是来不及停下的人。但是${daily.product}让${daily.value}，${daily.proof}。最后，生活重新回到自己的节奏。`,`多年后，他忘了那天有多难，却记得问题终于被解决。${daily.product}用${daily.proof}带来${daily.value}。现在，让重要的事不再被打断。`];return [`有些麻烦看起来很小，却每天都在消耗我们。对${daily.audience}来说，真正需要的不是更多选择，而是一次确定的解决。${daily.product}带来${daily.value}，并以${daily.proof}让承诺可以被相信。少一点将就，多一点从容，从今天开始。`,`我们为什么总把问题忍过去？直到它一次次打断生活，才发现真正需要的不是漂亮话，而是可靠的解决。${daily.product}理解${daily.audience}：${daily.value}。因为${daily.proof}，承诺才不是空话。现在，把时间还给真正重要的事。`,`什么才是值得选择的产品？不是声音最大，而是把承诺做成看得见的细节。${daily.product}为${daily.audience}而来，以${daily.proof}实现${daily.value}。所以，从今天开始，让每一个被认真处理的小问题，变成生活里真实的轻松。`]}
$('improve').onclick=()=>{const ranked=samples().map(text=>({text,...evaluate(text)})).sort((a,b)=>b.score-a.score);$('improve-panel').innerHTML='<h3>高分改写示范</h3><p class="improve-intro">以下分数由当前评分器实时计算。原样填回同一道题，分数会保持一致。</p>'+ranked.map(x=>`<article><span>评分器实测 ${x.score} 分</span><strong>${esc(x.text)}</strong></article>`).join('');$('improve-panel').hidden=false;$('improve-panel').scrollIntoView({behavior:'smooth'})};
function renderHistory(){const names={slogan:'Slogan',tvc:'TVC广告',long:'长文案'},all=records().slice().reverse();$('history-list').innerHTML=all.length?all.map(x=>`<article class="history-item"><div class="history-score">${x.score}<small>分</small></div><div><p class="history-meta">${x.date} · ${names[x.mode]||'Slogan'} · ${esc(x.product||'未填写产品')}</p><h3>${esc(x.text||x.slogan)}</h3><p>${x.verdict}</p></div></article>`).join(''):'<div class="history-empty">还没有训练记录。完成今天的第一次训练吧。</div>'}
$('history-open').onclick=()=>{renderHistory();$('history').hidden=false;$('history').scrollIntoView({behavior:'smooth'})};$('history-close').onclick=()=>{$('history').hidden=true;window.scrollTo({top:0,behavior:'smooth'})};
renderMode();stats();

