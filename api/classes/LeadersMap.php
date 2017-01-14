<?php

class LeadersMap extends Mapper {

	public function getLeaders($category) {

		// $category valid = m(ale), f(emale), t(eam)

		if($category === 'm') {
			// get top three mens games, scratch
			$sql = "SELECT DISTINCT bnp_players.pid as pid, pname, GREATEST(MAX(g1), MAX(g2), MAX(g3)) AS hscore
	 				FROM bnp_players
	 				JOIN bnp_stats
	 				ON bnp_stats.pid = bnp_players.pid
                    WHERE bnp_players.mf = 'm'
					GROUP BY bnp_players.pid
                    ORDER BY hscore DESC LIMIT 3";
		}

		if($category === 'f') {
			// get top three women, scratch
			$sql = "SELECT DISTINCT bnp_players.pid as pid, pname, GREATEST(MAX(g1), MAX(g2), MAX(g3)) AS hscore
	 				FROM bnp_players
	 				JOIN bnp_stats
	 				ON bnp_stats.pid = bnp_players.pid
                    WHERE bnp_players.mf = 'f'
					GROUP BY bnp_players.pid
                    ORDER BY hscore DESC LIMIT 3";
		}

		if($category === 't') {
			// get top three teams, scratch
			return;

		}

        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }
        return json_encode($results, JSON_NUMERIC_CHECK);
	}

}

?>
