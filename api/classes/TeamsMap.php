<?php

class TeamsMap extends Mapper {

    public function getTeams() {
        $sql = "SELECT tid, tname AS TeamName
					FROM bnp_teams
					ORDER BY tname ASC";
        $stmt = $this->db->query($sql);

        $results = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $results[] = $row;
        }

        return json_encode($results);
    }

}

?>
