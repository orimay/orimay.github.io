async function e(e){await e.query(`
    FOR $pair IN (SELECT word, game FROM show WHERE answer = "plus" AND ms != NONE GROUP BY word, game) {
      LET $recent = (SELECT VALUE ms FROM show WHERE word = $pair.word AND game = $pair.game AND answer = "plus" AND ms != NONE ORDER BY at DESC LIMIT 5);
      UPSERT type::record('recall', [$pair.word, $pair.game]) SET ms = math::median($recent);
    };
  `).collect()}export{e as run};