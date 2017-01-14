<?php

class LeadersMap extends Mapper {

	public function getLeaders($player, $category, $handicap) {

		// $player valid = m(ale), f(emale), t(eam)
		// $category valid = g(ame), s(eries)
		// $handicap valid boolean

		if($player === 'm') {

			// stats for mens individuals

			if($category === 'g') {

				if($handicap) {
					// get top three mens games, with handicap
					return;

				} else {
					// get top three mens games, scratch
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname, GREATEST(MAX(g1), MAX(g2), MAX(g3)) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'm'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
		        }

	        } else if ($category === 's') {

	        	if($handicap) {
	        		// get top three mens series, with handicap
	        		return;

	        	} else {
	        		// get top three mens series, scratch
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname, MAX(g1 + g2 + g3) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'm'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
	        	}
	        }
		}

		if($player === 'f') {

			// stats for womens individuals

			if($category === 'g') {

				if($handicap) {
					// get top three womens games, with handicap
					return;

				} else {

					// get top three women, scratch
					$sql = "SELECT DISTINCT bnp_players.pid as pid, pname, GREATEST(MAX(g1), MAX(g2), MAX(g3)) AS hscore
			 				FROM bnp_players
			 				JOIN bnp_stats
			 				ON bnp_stats.pid = bnp_players.pid
		                    WHERE bnp_players.mf = 'f'
							GROUP BY bnp_players.pid
		                    ORDER BY hscore DESC LIMIT 3";
		        }
			}
		}


		if($player === 't') {

			// stats for teams


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
