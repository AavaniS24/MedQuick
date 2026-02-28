function detectEmergency() {
  const input = document.getElementById("emergencyInput").value.toLowerCase();
  const resultBox = document.getElementById("resultBox");

  let response = "";

  if (input.includes("choking")) {
    response = "<strong>Choking:</strong><br>1. Give 5 back blows.<br>2. Perform Heimlich maneuver.<br>3. Call emergency if unconscious.";
  } 
  else if (input.includes("snake")) {
    response = "<strong>Snake Bite:</strong><br>1. Keep victim calm.<br>2. Immobilize limb.<br>3. Do NOT suck venom.";
  }
  else {
    response = "Emergency not recognized. Please try another keyword.";
  }

  resultBox.innerHTML = response;
  resultBox.style.display = "block";
}

const D = {
  choking:{
    emoji:'🫁',title:'Choking',
    sub:'Airway is blocked — the person cannot breathe, speak or cough.',
    color:'linear-gradient(135deg,#ff6b35,#f7931e)',sc:'#ff6b35',
    steps:[
      'Ask "Are you choking?" If they can cough forcefully, let them — do not interfere yet.',
      'If they cannot breathe or speak: stand behind them and give 5 firm back blows between the shoulder blades with the heel of your hand.',
      'If that fails: give 5 abdominal thrusts (Heimlich) — fist just above the navel, grip with other hand, push sharply inward and upward.',
      'Alternate back blows and thrusts until the object dislodges or they lose consciousness. If unconscious, call 108 and start CPR.'
    ],
    donts:["Don't do a blind finger sweep — you may push the object deeper.","Don't use abdominal thrusts on infants or pregnant women (use chest thrusts).","Don't leave the person alone."],
    note:'Even after dislodging, see a doctor — internal injury from thrusts is possible.'
  },
  heart:{
    emoji:'❤️',title:'Heart Attack',
    sub:'Blocked artery cutting off blood to the heart. Every second counts.',
    color:'linear-gradient(135deg,#e63946,#c1121f)',sc:'#e63946',
    steps:[
      'Call 108 immediately. Do not wait to see if symptoms improve.',
      'Help them sit or lie in the most comfortable position. Loosen tight clothing around the chest and neck.',
      'If conscious and not allergic: give one aspirin (300 mg) to chew slowly.',
      'If they stop breathing: start CPR — 30 hard, fast chest compressions then 2 rescue breaths. Repeat until help arrives.'
    ],
    donts:["Don't let them walk, drive or exert themselves.","Don't give food, water or aspirin if they say they're allergic.","Don't assume it's indigestion — act fast."],
    note:'Signs in women may be subtle: extreme fatigue, nausea, mild chest discomfort — not always crushing pain.'
  },
  snakebite:{
    emoji:'🐍',title:'Snake Bite',
    sub:"India has the world's highest snakebite death rate. Fast, correct action saves lives.",
    color:'linear-gradient(135deg,#4a7c59,#1e4d2b)',sc:'#4a7c59',
    steps:[
      'Move away from the snake. Keep the person calm and as still as possible — movement speeds venom spread.',
      'Call 108 now. Anti-venom is the only real treatment, available only at hospitals.',
      'Keep the bitten limb below heart level and immobilize it gently. Remove rings, watches and tight clothing — swelling is coming.',
      'Mark the edge of swelling with a pen and note the time. Get to hospital immediately — even if no symptoms yet.'
    ],
    donts:["Don't suck out venom, cut the wound, apply ice, or use a tourniquet — all harmful or useless.","Don't apply herbs, pastes or traditional remedies.","Don't wait for symptoms before going to hospital."],
    note:"Anti-venom is free at government hospitals. India's deadly four: Cobra, Krait, Russell's Viper, Saw-scaled Viper."
  },
  electric:{
    emoji:'⚡',title:'Electric Shock',
    sub:'Contact with live electrical current. Do NOT touch the person until power is off.',
    color:'linear-gradient(135deg,#e6b800,#b07d00)',sc:'#c8860a',
    steps:[
      'DO NOT touch the person — switch off power at the source or mains first.',
      'If you cannot switch off power, use a dry non-conductive object (wooden stick, dry rope) to move them away from the source.',
      'Call 108. Check if they are breathing. If not, start CPR immediately.',
      'If conscious: lay them down, keep them warm. Watch for delayed symptoms — heart problems can appear hours later.'
    ],
    donts:["NEVER touch the person while they are still in contact with the current.","Don't use anything wet or metal to separate them from the source.","Don't assume they are fine — internal injuries are common."],
    note:'Even low-voltage shocks can cause delayed heart rhythm problems. All electric shock victims need hospital evaluation.'
  },
  burns:{
    emoji:'🔥',title:'Burns',
    sub:'Heat, chemical or electrical burn. Cool it, cover it, call for help.',
    color:'linear-gradient(135deg,#e76f51,#a4280e)',sc:'#e76f51',
    steps:[
      'Cool the burn under cool (not ice-cold) running water for 10–20 minutes immediately.',
      'Remove jewellery and clothing near the burn — but NOT anything stuck to the skin.',
      'Cover loosely with a clean non-fluffy cloth or cling film. Do not burst blisters.',
      'Call 108 for: burns larger than the palm, on face/hands/genitals, deep burns, chemical burns, or burns on children.'
    ],
    donts:["Don't use ice, butter, toothpaste, oil or any home remedy — they make burns worse.","Don't burst blisters — increases infection risk.","Don't remove material stuck to burned skin."],
    note:'Chemical burns: brush off dry chemical first, then rinse with large amounts of water for 20 minutes.'
  },
  drowning:{
    emoji:'🌊',title:'Drowning',
    sub:'Water in the lungs. Your safety comes first — do not jump in unless trained.',
    color:'linear-gradient(135deg,#0077b6,#023e8a)',sc:'#0077b6',
    steps:[
      'Keep yourself safe. Throw a rope, extend a branch, or use a float. Do not jump into fast water unless trained.',
      'Once out of water: call 108. If breathing, turn them on their side (recovery position).',
      'If NOT breathing: give 5 rescue breaths first, then begin CPR (30 compressions, 2 breaths). Continue until help arrives.',
      'Keep them warm. All near-drowning victims must go to hospital — even if they seem fine.'
    ],
    donts:["Don't hold them upside down to drain water — wastes precious time.","Don't assume they are fine just because they are awake.","Don't leave them alone after rescue."],
    note:'Secondary drowning can occur hours later — watch for coughing, chest pain or unusual tiredness.'
  },
  fracture:{
    emoji:'🦴',title:'Fractures',
    sub:'Broken or cracked bone. Keep it still — do not try to fix it yourself.',
    color:'linear-gradient(135deg,#7b2d8b,#480ca8)',sc:'#7b2d8b',
    steps:[
      'Tell the person not to move the injured area. Do not try to straighten the bone.',
      'Immobilize the limb in the position you find it using a splint (rolled magazine, flat board) tied loosely above and below the break.',
      'For an open fracture (bone through skin): cover lightly with a clean cloth, do not push the bone back.',
      'Apply an ice pack wrapped in cloth for swelling. Call 108 for open fractures, spine, pelvis or femur injuries.'
    ],
    donts:["Don't attempt to realign or straighten the bone.","Don't move the person if neck or spine injury is suspected.","Don't tie the splint so tight it cuts off circulation."],
    note:'Signs: cracking sound, intense pain, swelling, bruising, deformity, inability to bear weight.'
  },
  poisoning:{
    emoji:'☠️',title:'Poisoning / Overdose',
    sub:'Toxic substance swallowed, inhaled, injected or absorbed through skin.',
    color:'linear-gradient(135deg,#386641,#1a4327)',sc:'#386641',
    steps:[
      'Call 1066 (Poison Control) or 108 immediately. Identify what was taken, how much, and when.',
      'If unconscious but breathing: place on their side (recovery position) so they cannot choke on vomit.',
      'For inhaled fumes: move to fresh air. For skin/eye contact: remove clothing and rinse with water for 15–20 minutes.',
      'Keep the poison container to show medical staff. Do not leave the person alone.'
    ],
    donts:["Don't induce vomiting unless Poison Control specifically tells you to.","Don't give milk, water or 'antidotes' without guidance.","Don't assume it's 'just alcohol' — overdose needs emergency care."],
    note:'India Poison Control: 1066 (AIIMS Delhi). Signs: vomiting, seizures, confusion, burning mouth, unequal pupils.'
  },
  bleeding:{
    emoji:'🩹',title:'Severe Bleeding',
    sub:'Heavy blood loss from a deep wound. Your goal: stop the bleeding.',
    color:'linear-gradient(135deg,#9b2226,#ae2012)',sc:'#9b2226',
    steps:[
      'Wear gloves if available. Apply firm, direct pressure on the wound with a clean cloth. Press hard and hold.',
      'If blood soaks through: add more cloth on top — do NOT lift the first layer (disrupts the clot).',
      'Elevate the limb above heart level if no fracture is suspected.',
      'If bleeding is life-threatening and uncontrolled: apply a tourniquet 5–8 cm above the wound, note the time, and call 108.'
    ],
    donts:["Don't remove the first cloth layer.","Don't remove an embedded object (knife, glass) — stabilize it in place.","Don't use a tourniquet on the neck, head or torso."],
    note:'Signs of shock: pale skin, rapid shallow breathing, confusion. Lay them flat with legs raised slightly.'
  },
  allergic:{
    emoji:'🤧',title:'Allergic Reaction',
    sub:'From mild hives to life-threatening anaphylaxis. Speed matters for severe reactions.',
    color:'linear-gradient(135deg,#d4a017,#8a5c00)',sc:'#d4a017',
    steps:[
      'Assess: Mild = hives, sneezing, watery eyes. Severe (anaphylaxis) = throat swelling, difficulty breathing, fainting.',
      'For SEVERE reactions: call 108 immediately. If they have an EpiPen, use it in the outer thigh right away.',
      'Sit them upright if breathing is difficult. Lay them flat with legs raised if they feel faint.',
      'If breathing stops: begin CPR. Stay with them — even after EpiPen, they must go to hospital.'
    ],
    donts:["Don't wait to see if a severe reaction improves — anaphylaxis can kill within minutes.","Don't give antihistamines instead of epinephrine for severe reactions.","Don't leave them alone even if they seem to improve."],
    note:'Anaphylaxis signs: sudden throat tightening, hoarse voice, blue lips, weak rapid pulse. When in doubt, treat as anaphylaxis.'
  }
};

// ── ASSISTANT FLOW ───────────────────────────────────────────────────────
const FLOW = {
  q1:{
    question:'Is the person conscious (awake and responsive)?',
    options:[
      {label:'✅  Yes — they are awake',             next:'q2'},
      {label:'❌  No — unconscious or unresponsive',  result:'unconscious'}
    ]
  },
  q2:{
    question:'What is the main problem you can see?',
    options:[
      {label:'🩸  Bleeding or a visible wound',         result:'bleeding'},
      {label:'🫁  Trouble breathing or choking',         result:'breathing'},
      {label:'🔥  Burn, electric shock or poisoning',    result:'hazard'},
      {label:'🦴  Fall, fracture or severe pain',        result:'trauma'}
    ]
  }
};

const RES = {
  unconscious:{cls:'warn',title:'Call 108 Immediately',
    msg:'Check for breathing. If breathing → place on side (recovery position). If NOT breathing → start CPR: 30 hard chest compressions then 2 breaths. Repeat until help arrives.',
    btns:[{label:'Drowning / CPR Guide',key:'drowning'},{label:'Heart Attack',key:'heart'}]},
  bleeding:{cls:'',title:'Go to: Severe Bleeding',
    msg:'Apply firm direct pressure with a clean cloth and hold it. Do not lift the cloth. Elevate the limb if possible.',key:'bleeding'},
  breathing:{cls:'warn',title:'Go to: Choking',
    msg:'If they can cough, let them. If they cannot breathe or speak, start back blows and abdominal thrusts immediately.',key:'choking'},
  hazard:{cls:'',title:'Pick the one that matches:',
    msg:'Select the specific emergency below.',
    btns:[{label:'Burns',key:'burns'},{label:'Electric Shock',key:'electric'},{label:'Poisoning',key:'poisoning'}]},
  trauma:{cls:'',title:'Go to: Fractures',
    msg:'Keep them still. Do not move them if neck or spine injury is possible. Immobilize the limb and call 108.',key:'fracture'}
};

let astStep='q1', astHist=[];

function openAssistant(){
  astStep='q1'; astHist=[];
  document.getElementById('me').textContent='🆘';
  document.getElementById('modal-title').textContent="I Don't Know What To Do";
  document.getElementById('ms').textContent="Answer 2 quick questions — I'll find the right steps.";
  document.getElementById('ph').style.background='linear-gradient(135deg,#0f3460,#533483)';
  renderAst();
  showOverlay();
}

function renderAst(){
  const node=FLOW[astStep];
  const step=astHist.length+1,total=2;
  let dots='';
  for(let i=1;i<=total;i++) dots+=`<div class="ast-dot${i<step?' done':''}"></div>`;
  let html=`<div class="ast-wrap">
    <div class="ast-progress">${dots}<span class="ast-prog-label">Step ${step} of ${total}</span></div>
    <div class="ast-q">${node.question}</div>
    <div class="ast-opts">`;
  node.options.forEach(o=>{
    const parts=o.label.split('  '), icon=parts[0], text=parts.slice(1).join('  ');
    if(o.next) html+=`<button class="ast-btn" onclick="astNext('${o.next}')"><span style="font-size:1.25rem">${icon}</span>${text}</button>`;
    else       html+=`<button class="ast-btn" onclick="astRes('${o.result}')"><span style="font-size:1.25rem">${icon}</span>${text}</button>`;
  });
  html+=`</div>`;
  if(astHist.length>0) html+=`<button class="ast-back" onclick="astBack()">← Back</button>`;
  html+=`</div>`;
  document.getElementById('pb').innerHTML=html;
}

function astNext(n){ astHist.push(astStep); astStep=n; renderAst(); }

function astRes(key){
  const r=RES[key];
  let btn='';
  if(r.key) btn=`<button class="ast-goto" onclick="closeModal();openModal('${r.key}')">Open: ${r.title.replace('Go to: ','')} →</button>`;
  else if(r.btns) r.btns.forEach(b=>{btn+=`<button class="ast-goto b" style="margin-right:.4rem;margin-top:.4rem" onclick="closeModal();openModal('${b.key}')">${b.label}</button>`;});
  document.getElementById('pb').innerHTML=`<div class="ast-wrap">
    <div class="ast-result${r.cls?' '+r.cls:''}">
      <h3>${r.title}</h3><p>${r.msg}</p>${btn}
    </div>
    <button class="ast-back" onclick="astBack()">← Back</button>
  </div>`;
}

function astBack(){ if(astHist.length>0){astStep=astHist.pop();renderAst();} }

// ── MODAL ─────────────────────────────────────────────────────────────────
function openModal(key){
  const d=D[key]; if(!d) return;
  document.getElementById('me').textContent=d.emoji;
  document.getElementById('modal-title').textContent=d.title;
  document.getElementById('ms').textContent=d.sub;
  document.getElementById('ph').style.background=d.color;

  let html=`<div class="sb"><div class="sbt do">✅ What To Do</div><ul class="slist">`;
  d.steps.forEach((s,i)=>{
    html+=`<li class="sitem"><span class="snum" style="background:${d.sc}">${i+1}</span><span class="stxt">${s}</span></li>`;
  });
  html+=`</ul></div><div class="sb"><div class="sbt dont">🚫 What NOT To Do</div><ul class="slist">`;
  d.donts.forEach(s=>{ html+=`<li class="ditem"><span class="dicon">✕</span><span class="dtxt">${s}</span></li>`; });
  html+=`</ul></div>`;
  if(d.note) html+=`<div class="sb"><div class="sbt note">💡 Know This</div><div class="nbox">${d.note}</div></div>`;

  html+=`<div class="esec"><h3>📞 Emergency Contacts — India</h3><div class="cgrid">
    <button class="cbtn mn" onclick="confirmCall('112','National Emergency','🆘')"><span>🆘</span><div><div class="num">112</div><div class="lbl">National Emergency</div></div></button>
    <button class="cbtn am" onclick="confirmCall('108','Ambulance','🚑')"><span>🚑</span><div><div class="num">108</div><div class="lbl">Ambulance</div></div></button>
    <button class="cbtn po" onclick="confirmCall('100','Police','🚔')"><span>🚔</span><div><div class="num">100</div><div class="lbl">Police</div></div></button>
    <button class="cbtn fi" onclick="confirmCall('101','Fire Brigade','🔥')"><span>🔥</span><div><div class="num">101</div><div class="lbl">Fire Brigade</div></div></button>
    <button class="cbtn px" onclick="confirmCall('1066','Poison Control','☠️')"><span>☠️</span><div><div class="num">1066</div><div class="lbl">Poison Control</div></div></button>
  </div></div>`;

  document.getElementById('pb').innerHTML=html;
  showOverlay();
}

function showOverlay(){
  const ov=document.getElementById('overlay');
  ov.classList.add('active');
  document.body.style.overflow='hidden';
  document.getElementById('panel').scrollTop=0;
  setTimeout(()=>document.querySelector('.xbtn').focus(),320);
}
function closeModal(){
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow='';
}
function closeBg(e){ if(e.target===document.getElementById('overlay')) closeModal(); }
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

// ── CONFIRM CALL ──────────────────────────────────────────────────────────
function confirmCall(num,name,icon){
  document.getElementById('cIcon').textContent=icon;
  document.getElementById('cNum').textContent=num;
  document.getElementById('cName').textContent=name;
  document.getElementById('cYes').onclick=()=>{
    closeConfirm();
    alert(`📞 DEMO MODE\n\nIn a real emergency this would dial ${num} (${name}).\n\nThis is a demo version — no call has been made.`);
  };
  document.getElementById('conOverlay').classList.add('show');
}
function closeConfirm(){ document.getElementById('conOverlay').classList.remove('show'); }
document.getElementById('conOverlay').addEventListener('click',function(e){ if(e.target===this) closeConfirm(); });

// ── NEARBY HOSPITALS ─────────────────────────────────────────────────────
let hospMap = null, hospMarkers = [], userLatLon = null;

function findHospitals() {
  const btn    = document.getElementById('hospBtn');
  const status = document.getElementById('hospStatus');
  const list   = document.getElementById('hospList');
  const mapDiv = document.getElementById('hospMap');

  btn.disabled = true;
  document.getElementById('hospBtnIcon').textContent = '⏳';
  btn.childNodes[1].textContent = ' Locating you...';
  status.className = 'hosp-status';
  status.textContent = '';

  if (!navigator.geolocation) {
    showHospStatus('err', '❌ Your browser does not support location.');
    resetBtn(); return;
  }

  navigator.geolocation.getCurrentPosition(async pos => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    userLatLon = { lat, lon };
    showHospStatus('', '🔍 Searching for hospitals within 5 km...');

    try {
      const query = `[out:json][timeout:25];
        (node["amenity"="hospital"](around:5000,${lat},${lon});
         way["amenity"="hospital"](around:5000,${lat},${lon});
         node["amenity"="clinic"](around:3000,${lat},${lon});
         node["healthcare"="hospital"](around:5000,${lat},${lon});
        );out center;`;

      const res  = await fetch('https://overpass-api.de/api/interpreter', { method:'POST', body:query });
      const data = await res.json();
      const els  = data.elements || [];

      if (!els.length) {
        showHospStatus('err', '⚠️ No hospitals found within 5 km. Try Google Maps for your area.');
        resetBtn(); return;
      }

      const hospitals = els
        .map(el => ({
          name  : el.tags?.name || el.tags?.['name:en'] || 'Hospital / Clinic',
          lat   : el.lat  || el.center?.lat,
          lon   : el.lon  || el.center?.lon,
          phone : el.tags?.phone || el.tags?.['contact:phone'] || null,
          type  : el.tags?.amenity === 'clinic' ? 'Clinic' : 'Hospital'
        }))
        .filter(h => h.lat && h.lon)
        .map(h => ({ ...h, dist: calcDist(lat, lon, h.lat, h.lon) }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 8);

      showHospStatus('ok', `✅ Found ${hospitals.length} nearby — tap a card to see on map`);

      // Build cards
      list.innerHTML = hospitals.map((h, i) => `
        <div class="hosp-card" id="hc${i}" onclick="zoomHosp(${i},${h.lat},${h.lon},'${h.name.replace(/'/g,"\\'")}')">
          <div class="hosp-icon">🏥</div>
          <div class="hosp-info">
            <div class="hosp-name">${h.name}</div>
            <div class="hosp-meta">
              <span class="hosp-tag">${h.type}</span>
              <span class="hosp-dist">📏 ${(h.dist/1000).toFixed(1)} km</span>
            </div>
            ${h.phone ? `<a class="hosp-phone" href="tel:${h.phone}" onclick="event.stopPropagation()">📞 ${h.phone}</a>` : ''}
          </div>
          <a class="hosp-go" href="https://www.openstreetmap.org/directions?from=${lat},${lon}&to=${h.lat},${h.lon}" target="_blank" onclick="event.stopPropagation()">🗺 Go</a>
        </div>`).join('');

      // Build map
      mapDiv.style.display = 'block';
      if (hospMap) { hospMap.remove(); hospMap = null; }
      hospMap = L.map('hospMap').setView([lat, lon], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:'© OpenStreetMap contributors'
      }).addTo(hospMap);

      // You marker
      L.marker([lat, lon], { icon: L.divIcon({
        html:'<div style="background:#e63946;width:16px;height:16px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.5)"></div>',
        iconSize:[16,16], iconAnchor:[8,8]
      })}).addTo(hospMap).bindPopup('<strong>📍 You are here</strong>').openPopup();

      // Hospital markers
      hospMarkers = hospitals.map((h, i) =>
        L.marker([h.lat, h.lon], { icon: L.divIcon({
          html:`<div style="background:#0077b6;color:#fff;width:28px;height:28px;border-radius:50%;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:13px;box-shadow:0 2px 6px rgba(0,0,0,.35)">🏥</div>`,
          iconSize:[28,28], iconAnchor:[14,14]
        })}).addTo(hospMap)
          .bindPopup(`<strong>${h.name}</strong><br>${(h.dist/1000).toFixed(1)} km${h.phone?'<br>📞 '+h.phone:''}`)
      );

    } catch(e) {
      showHospStatus('err', '❌ Could not load hospital data. Check your internet and try again.');
    }

    resetBtn();

  }, err => {
    const msgs = ['', 'Location access denied — allow location in browser settings.', 'Location unavailable — make sure GPS is on.', 'Location timed out — try in an open area.'];
    showHospStatus('err', '❌ ' + (msgs[err.code] || 'Location error.'));
    resetBtn();
  }, { timeout:12000, enableHighAccuracy:true });
}

function zoomHosp(i, lat, lon, name) {
  document.querySelectorAll('.hosp-card').forEach(c => c.classList.remove('sel'));
  document.getElementById('hc' + i)?.classList.add('sel');
  if (hospMap) {
    hospMap.flyTo([lat, lon], 16, { duration:1 });
    hospMarkers[i]?.openPopup();
  }
  document.getElementById('hospMap').scrollIntoView({ behavior:'smooth', block:'center' });
}

function showHospStatus(cls, msg) {
  const s = document.getElementById('hospStatus');
  s.className = 'hosp-status' + (cls ? ' ' + cls : '');
  s.textContent = msg;
}

function resetBtn() {
  const btn = document.getElementById('hospBtn');
  btn.disabled = false;
  document.getElementById('hospBtnIcon').textContent = '🔄';
  btn.childNodes[1].textContent = ' Search Again';
}

function calcDist(lat1, lon1, lat2, lon2) {
  const R = 6371000, d2r = Math.PI/180;
  const dLat = (lat2-lat1)*d2r, dLon = (lon2-lon1)*d2r;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*d2r)*Math.cos(lat2*d2r)*Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}