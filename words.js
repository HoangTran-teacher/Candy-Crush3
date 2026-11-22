'use strict';
/* words.js – toàn bộ NỘI DUNG bài học (Unit 6-7-8): từ vựng + hình, hội thoại, câu sắp xếp.
   Muốn sửa/thêm từ: chỉnh ITEMS, DLG, SORT, PEOPLE, POOL trong file này. File index.html không cần đổi. */
/* ================= KIẾN THỨC (theo ảnh Unit 6 - 7 - 8) =================
   Muốn sửa nội dung: chỉnh các danh sách ITEMS, DLG, SORT, PEOPLE bên dưới. */
const svg=b=>`<svg class="pic" viewBox="0 0 120 120" role="img" aria-hidden="true">${b}</svg>`,emo=e=>`<div class="emo">${e}</div>`;
const HALL=`<path d="M8 14L46 40V80L8 106Z" fill="#c9d5e6"/><path d="M112 14L74 40V80L112 106Z" fill="#c9d5e6"/><path d="M8 106L46 80H74L112 106Z" fill="#9fb0c8"/><path d="M8 14L46 40H74L112 14Z" fill="#eef2f8"/><rect x="46" y="40" width="28" height="40" fill="#8fb4e0"/><path d="M16 38L34 50V86L16 98Z" fill="#a9672b"/><path d="M104 38L86 50V86L104 98Z" fill="#a9672b"/><circle cx="30" cy="68" r="2" fill="#ffd24d"/><circle cx="90" cy="68" r="2" fill="#ffd24d"/>`;
const ARW=(d,c)=>`<path d="${d}" stroke="${c}" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const STAIRS_UP=`<path d="M10 104H34V86H58V68H82V50H110V104Z" fill="#d9b380" stroke="#8a6a3b" stroke-width="3" stroke-linejoin="round"/>`;
const STAIRS_DN=`<path d="M10 104V50H34V68H58V86H82V104Z" fill="#d9b380" stroke="#8a6a3b" stroke-width="3" stroke-linejoin="round"/>`;
const KID=(x,y)=>`<circle cx="${x}" cy="${y}" r="7" fill="#ffd7a8"/><rect x="${x-5}" y="${y+7}" width="10" height="14" rx="4" fill="#2f7de1"/>`;
const GLUE=`<rect x="42" y="38" width="36" height="68" rx="8" fill="#fff" stroke="#9db4c9" stroke-width="3"/><rect x="42" y="60" width="36" height="26" fill="#2f9e44"/><text x="60" y="78" text-anchor="middle" font-size="10" font-weight="800" fill="#fff" font-family="sans-serif">GLUE</text><rect x="46" y="10" width="28" height="30" rx="7" fill="#e0483e"/><rect x="50" y="36" width="20" height="6" fill="#b92d24"/>`,SQ=`<path d="M20 102V22L102 102Z" fill="rgba(120,200,255,.55)" stroke="#2f7de1" stroke-width="5" stroke-linejoin="round"/><path d="M40 90V58L72 90Z" fill="#fff" stroke="#2f7de1" stroke-width="3" stroke-linejoin="round"/><path d="M20 34H30M20 46H28M20 58H30M20 70H28M20 82H30M34 102V94M46 102V96M58 102V94M70 102V96M82 102V94" stroke="#1f5ab0" stroke-width="2"/>`,BAG=`<rect x="24" y="52" width="8" height="30" rx="4" fill="#1f5ab0"/><rect x="88" y="52" width="8" height="30" rx="4" fill="#1f5ab0"/><rect x="28" y="30" width="64" height="76" rx="16" fill="#2f7de1"/><path d="M44 30V22Q44 12 60 12Q76 12 76 22V30" fill="none" stroke="#1f5ab0" stroke-width="6" stroke-linecap="round"/><rect x="38" y="62" width="44" height="34" rx="9" fill="#4a9bff" stroke="#1f5ab0" stroke-width="3"/><path d="M38 74H82" stroke="#1f5ab0" stroke-width="3"/><circle cx="60" cy="68" r="4" fill="#ffd24d"/>`,CASE=`<g transform="rotate(-12 40 46)"><rect x="34" y="14" width="9" height="36" fill="#2f9e44"/><path d="M34 14L38.5 4L43 14Z" fill="#f1d0a0"/></g><g transform="rotate(10 78 46)"><rect x="72" y="12" width="9" height="38" fill="#e0483e"/><path d="M72 12L76.5 2L81 12Z" fill="#f1d0a0"/></g><rect x="12" y="46" width="96" height="48" rx="16" fill="#f28ab2" stroke="#c2578a" stroke-width="3"/><path d="M12 70H108" stroke="#c2578a" stroke-width="3" stroke-dasharray="6 5"/><rect x="50" y="62" width="20" height="14" rx="6" fill="#ffd24d" stroke="#c9a000" stroke-width="2"/>`;
const ITEMS=[
 /* Unit 6 - chỉ đường */
 {u:6,w:'corridor',vi:'hành lang',st:'This is the corridor.',p:svg(HALL)},
 {u:6,w:'go along',vi:'đi dọc theo',st:'Go along the corridor.',p:svg(HALL+ARW('M60 102V68M46 80L60 64L74 80','#1fbf5a'))},
 {u:6,w:'go past',vi:'đi qua',st:'Go past the room.',p:svg(HALL+`<path d="M16 38L34 50V86L16 98Z" fill="none" stroke="#e0483e" stroke-width="5" stroke-linejoin="round"/>`+ARW('M84 102V68M70 80L84 64L98 80','#1fbf5a'))},
 {u:6,w:'go downstairs',vi:'đi xuống cầu thang',st:'Go downstairs.',p:svg(STAIRS_DN+KID(22,38)+ARW('M44 40L84 84M84 62V84H62','#e0483e'))},
 {u:6,w:'go upstairs',vi:'đi lên cầu thang',st:'Go upstairs.',p:svg(STAIRS_UP+KID(22,70)+ARW('M44 70L84 28M62 28H84V50','#1fbf5a'))},
 {u:6,w:'turn left',vi:'rẽ trái',st:'Turn left.',p:svg(`<rect x="8" y="8" width="104" height="104" rx="18" fill="#e8f1ff"/>`+ARW('M72 104V66Q72 44 50 44H28','#2f7de1').replace('stroke-width="9"','stroke-width="14"')+ARW('M42 26L22 44L42 62','#2f7de1').replace('stroke-width="9"','stroke-width="14"'))},
 {u:6,w:'turn right',vi:'rẽ phải',st:'Turn right.',p:svg(`<rect x="8" y="8" width="104" height="104" rx="18" fill="#e8f1ff"/>`+ARW('M48 104V66Q48 44 70 44H92','#e0483e').replace('stroke-width="9"','stroke-width="14"')+ARW('M78 26L98 44L78 62','#e0483e').replace('stroke-width="9"','stroke-width="14"'))},
 /* Unit 7 - vì sao em thích môn học */
 {u:7,w:'difficult',vi:'khó',st:'He thinks it’s difficult.',p:emo('😰')},
 {u:7,w:'easy',vi:'dễ',st:'He thinks it’s easy.',p:emo('😎')},
 {u:7,w:'fun',vi:'vui',st:'He thinks it’s fun.',p:emo('🥳')},
 {u:7,w:'good for group work',vi:'tốt cho làm việc nhóm',st:'He thinks it’s good for group work.',p:emo('🧑‍🤝‍🧑')},
 {u:7,w:'interesting',vi:'thú vị',st:'He thinks it’s interesting.',p:emo('🤩')},
 {u:7,w:'useful',vi:'hữu ích',st:'He thinks it’s useful.',p:emo('🛠️')},
 {u:7,w:'boring',vi:'nhàm chán',st:'He thinks it’s boring.',p:emo('🥱')},
 /* Unit 8 - đồ dùng học tập, sở hữu cách */
 {u:8,w:'crayon',vi:'bút sáp màu',p:svg(`<g transform="rotate(-40 60 60)"><rect x="46" y="30" width="28" height="72" rx="3" fill="#e0483e"/><rect x="46" y="46" width="28" height="30" fill="#fff" opacity=".92"/><path d="M46 30L60 6L74 30Z" fill="#e0483e"/><path d="M54 18L60 6L66 18Z" fill="#b92d24"/><path d="M50 56H70M50 66H70" stroke="#e0483e" stroke-width="3"/></g>`)},
 {u:8,w:'glue stick',vi:'hồ dán khô',p:svg(GLUE)},
 {u:8,w:'pencil sharpener',vi:'gọt bút chì',p:svg(`<path d="M12 40L98 26Q110 24 110 38V76Q110 90 98 88L12 80Z" fill="#2f9e44" stroke="#1f7a33" stroke-width="3" stroke-linejoin="round"/><circle cx="34" cy="60" r="12" fill="#fff" stroke="#1f7a33" stroke-width="3"/><path d="M60 46H100M60 60H100M60 74H100" stroke="#bfe6c8" stroke-width="3" stroke-linecap="round"/><path d="M22 54L46 48" stroke="#9aa4ad" stroke-width="4"/>`)},
 {u:8,w:'set square',vi:'ê ke',p:svg(SQ)},
 {u:8,w:'school bag',vi:'cặp sách',p:svg(BAG)},
 {u:8,w:'pencil case',vi:'hộp bút',p:svg(CASE)},
 {u:8,w:'compass',vi:'com-pa',p:svg(`<circle cx="60" cy="18" r="9" fill="#9aa4ad" stroke="#5a6470" stroke-width="3"/><path d="M60 26L34 98M60 26L88 98" stroke="#5a6470" stroke-width="8" stroke-linecap="round"/><path d="M34 98L30 112" stroke="#2b2b34" stroke-width="5" stroke-linecap="round"/><path d="M88 98L92 108" stroke="#e0483e" stroke-width="7" stroke-linecap="round"/><path d="M46 68H76" stroke="#5a6470" stroke-width="4"/>`)}
];
const label=x=>x.u==8?(/^[aeiou]/.test(x.w)?'an ':'a ')+x.w:x.w;
const PEOPLE=[{n:'Mary',e:'👧'},{n:'Tom',e:'👦'},{n:'Lan',e:'👩'},{n:'Nam',e:'🧒'}];
/* Hội thoại: q = câu hỏi, a = câu trả lời đúng, g = câu trả lời sai ngữ pháp */
const DLG=[
 {u:6,q:'Could you tell me the way to the library, please?',a:'Go along the corridor and turn left.',g:'Go corridor along and turn left.'},
 {u:6,q:'Could you tell me the way to the music room, please?',a:'Go upstairs and turn right.',g:'Go upstairs and right turn.'},
 {u:6,q:'Could you tell me the way to the gym, please?',a:'Go downstairs and go past the canteen.',g:'Go downstairs and go pass the canteen.'},
 {u:6,q:'Could you tell me the way to the art room, please?',a:'Go along the corridor and turn right.',g:'Go along the corridor and turns right.'},
 {u:7,q:'Why does he like English?',a:'Because he thinks it’s fun.',g:'Because he thinks fun.'},
 {u:7,q:'Why does she like maths?',a:'Because she thinks it’s useful.',g:'Because he thinks it’s useful.'},
 {u:7,q:'Why doesn’t he like science?',a:'Because he thinks it’s difficult.',g:'Because he thinks difficult.'},
 {u:7,q:'Why doesn’t she like PE?',a:'Because she thinks it’s boring.',g:'Because she think it’s boring.'},
 {u:7,q:'Why does she like music?',a:'Because she thinks it’s interesting.',g:'Because she thinks interesting.'},
 {u:7,q:'Why does he like art?',a:'Because he thinks it’s good for group work.',g:'Because he thinks it good for group work.'},
 {u:8,q:'Whose crayon is this?',a:'It’s Mary’s.',g:'It’s Mary.'},
 {u:8,q:'Whose school bag is this?',a:'It’s Tom’s.',g:'It’s Tom.'},
 {u:8,q:'Whose compass is this?',a:'It’s Lan’s.',g:'It Lan’s.'},
 {u:8,q:'Whose pencil case is this?',a:'It’s Nam’s.',g:'Its Nam.'}
];
const POOL={6:['Because she thinks it’s fun.','It’s Mary’s.','Yes, I do.'],7:['Go along the corridor and turn left.','It’s Tom’s.','Yes, it is.'],8:['Go upstairs and turn right.','Because he thinks it’s easy.','Yes, I do.']};
const SORT=['Could you tell me the way to the library, please?','Go along the corridor and turn left.','Go upstairs and turn right.','Go downstairs and go past the canteen.','Why does he like English?','Why doesn’t she like maths?','Because he thinks it’s fun.','Because she thinks it’s useful.','Whose crayon is this?','It’s Mary’s crayon.','Whose pencil case is this?','This is Tom’s school bag.'];
/* ======================================================================= */
