<?php

class StandingsMap extends Mapper {
    
    public function getStandings() {
        $sql = "SELECT bnp_teams.tid, tname, MAX(wid) AS wid,
                SUM(twins) AS wins, SUM(tloss) AS loss, FORMAT(100 * SUM(twins)/(SUM(twins) + SUM(tloss)), 2) as pcnt,
                SUM(tpins) AS tpins FROM bnp_teams JOIN bnp_points
                ON bnp_points.tid = bnp_teams.tid
                GROUP BY tid
                ORDER BY wins DESC, tpins DESC";
        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }

        return json_encode($results);
    }
}

?>
