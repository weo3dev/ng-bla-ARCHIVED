<?php

class PlayersMap extends Mapper {
	
	public function getPlayers() {
        $sql = "SELECT bnp_players.pid as pid, pname, SUM(g1 + g2 + g3) as tpins, COUNT(wid)*3 as gms,
					ROUND(SUM(g1 + g2 + g3)/(COUNT(wid)*3), 0) as avgs,
					hnd
					FROM bnp_players
					JOIN bnp_stats
					ON bnp_stats.pid = bnp_players.pid
					GROUP BY pid";
        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }

        return json_encode($results);		
	}
}

?>