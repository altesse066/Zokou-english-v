const a1_0x1e7af6=a1_0x5f48;(function(_0x41916d,_0x54b8b7){const _0x22aa6c=a1_0x5f48,_0x5a3163=_0x41916d();while(!![]){try{const _0x3c8be8=-parseInt(_0x22aa6c(0x18c))/0x1+parseInt(_0x22aa6c(0x17c))/0x2+-parseInt(_0x22aa6c(0x183))/0x3*(-parseInt(_0x22aa6c(0x194))/0x4)+-parseInt(_0x22aa6c(0x192))/0x5*(parseInt(_0x22aa6c(0x188))/0x6)+-parseInt(_0x22aa6c(0x185))/0x7+-parseInt(_0x22aa6c(0x195))/0x8*(parseInt(_0x22aa6c(0x18d))/0x9)+parseInt(_0x22aa6c(0x190))/0xa;if(_0x3c8be8===_0x54b8b7)break;else _0x5a3163['push'](_0x5a3163['shift']());}catch(_0x2cc796){_0x5a3163['push'](_0x5a3163['shift']());}}}(a1_0x2621,0x8eb3d),require(a1_0x1e7af6(0x17e))['config']());const {Pool}=require('pg'),s=require(a1_0x1e7af6(0x18b));var dbUrl=s[a1_0x1e7af6(0x17d)]?s[a1_0x1e7af6(0x17d)]:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9';function a1_0x5f48(_0xdccb28,_0x5bd6a8){const _0x262143=a1_0x2621();return a1_0x5f48=function(_0x5f48f4,_0x7d668){_0x5f48f4=_0x5f48f4-0x17c;let _0x382260=_0x262143[_0x5f48f4];return _0x382260;},a1_0x5f48(_0xdccb28,_0x5bd6a8);}function a1_0x2621(){const _0x4bc343=['dotenv','exports','release','length','query','702IYvdzp','error','6261332MeqXgD','Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20données\x20depuis\x20la\x20table\x20\x27alive\x27:','La\x20table\x20\x27alive\x27\x20a\x20été\x20créée\x20avec\x20succès.','13842hXQhZp','\x0a\x20\x20\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20alive\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20message\x20text,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20lien\x20text\x0a\x20\x20\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20\x20\x20','rows','../set','822481MFhWGJ','4106367mklYdB','log','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27alive\x27:','19516040oJGjog','\x0a\x20\x20\x20\x20\x20\x20\x20\x20INSERT\x20INTO\x20alive\x20(id,\x20message,\x20lien)\x0a\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20(1,\x20$1,\x20$2)\x0a\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20DO\x20UPDATE\x20SET\x20message\x20=\x20excluded.message,\x20lien\x20=\x20excluded.lien;\x0a\x20\x20\x20\x20\x20\x20','705MOnaUX','connect','6184BPXRhG','8vbECCt','1539296zDnOEs','DATABASE_URL'];a1_0x2621=function(){return _0x4bc343;};return a1_0x2621();}const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig),creerTableAlive=async()=>{const _0x232bdd=a1_0x1e7af6;try{await pool[_0x232bdd(0x182)](_0x232bdd(0x189)),console[_0x232bdd(0x18e)](_0x232bdd(0x187));}catch(_0x1d3e91){console[_0x232bdd(0x184)](_0x232bdd(0x18f),_0x1d3e91);}};creerTableAlive();async function addOrUpdateDataInAlive(_0x298a05,_0x310c34){const _0x2f7cc3=a1_0x1e7af6,_0xf83df4=await pool[_0x2f7cc3(0x193)]();try{const _0x51a7e4=_0x2f7cc3(0x191),_0x424cb7=[_0x298a05,_0x310c34];await _0xf83df4['query'](_0x51a7e4,_0x424cb7),console[_0x2f7cc3(0x18e)]('Données\x20ajoutées\x20ou\x20mises\x20à\x20jour\x20dans\x20la\x20table\x20\x27alive\x27\x20avec\x20succès.');}catch(_0x4b2c5e){console[_0x2f7cc3(0x184)]('Erreur\x20lors\x20de\x20l\x27ajout\x20ou\x20de\x20la\x20mise\x20à\x20jour\x20des\x20données\x20dans\x20la\x20table\x20\x27alive\x27:',_0x4b2c5e);}finally{_0xf83df4[_0x2f7cc3(0x180)]();}};async function getDataFromAlive(){const _0x1ac719=a1_0x1e7af6,_0x16fd53=await pool['connect']();try{const _0x381e8c='SELECT\x20message,\x20lien\x20FROM\x20alive\x20WHERE\x20id\x20=\x201',_0x5bd0d1=await _0x16fd53[_0x1ac719(0x182)](_0x381e8c);if(_0x5bd0d1[_0x1ac719(0x18a)][_0x1ac719(0x181)]>0x0){const {message:_0x219bfd,lien:_0x8c76ea}=_0x5bd0d1[_0x1ac719(0x18a)][0x0];return{'message':_0x219bfd,'lien':_0x8c76ea};}else return console[_0x1ac719(0x18e)]('Aucune\x20donnée\x20trouvée\x20dans\x20la\x20table\x20\x27alive\x27.'),null;}catch(_0x2fc493){return console['error'](_0x1ac719(0x186),_0x2fc493),null;}finally{_0x16fd53[_0x1ac719(0x180)]();}};module[a1_0x1e7af6(0x17f)]={'addOrUpdateDataInAlive':addOrUpdateDataInAlive,'getDataFromAlive':getDataFromAlive};