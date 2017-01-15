import { Component, OnInit } from '@angular/core';
import { MensGameScratchService } from '../shared/services/mens-game-scratch/index';
import { WomensGameScratchService } from '../shared/services/womens-game-scratch/index';
import { MensSeriesScratchService } from '../shared/services/mens-series-scratch/index';
import { WomensSeriesScratchService } from '../shared/services/womens-series-scratch/index';

import { Player } from '../shared/models/Player';

/**
 * This class represents the lazy loaded TopsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'bla-leaders',
  templateUrl: 'leaders.component.html',
  styleUrls: ['leaders.component.css']
})
export class LeadersComponent implements OnInit {

    errorMessage: string;
    mensGameScratch: Player[];
    mensSeriesScratch: Player[];
    womensGameScratch: Player[];
    womensSeriesScratch: Player[];

    mode = 'Observable';

    constructor (
      private mgsService: MensGameScratchService,
      private mssService: MensSeriesScratchService,
      private wgsService: WomensGameScratchService,
      private wssService: WomensSeriesScratchService

    ) {}

    ngOnInit() {
    	this.getMensGameScratch();
      this.getMensSeriesScratch();
      this.getWomensGameScratch();
      this.getWomensSeriesScratch();
    }

    getMensGameScratch() {
    	this.mgsService.getLeaders()
    	.subscribe(mensGameScratch => this.mensGameScratch = mensGameScratch, error => this.errorMessage = <any>error);
    }

    getMensSeriesScratch() {
      this.mssService.getLeaders()
      .subscribe(mensSeriesScratch => this.mensSeriesScratch = mensSeriesScratch, error => this.errorMessage = <any>error);
    }

    getWomensGameScratch() {
      this.wgsService.getLeaders()
      .subscribe(womensGameScratch => this.womensGameScratch = womensGameScratch, error => this.errorMessage = <any>error);
    }

    getWomensSeriesScratch() {
      this.wssService.getLeaders()
      .subscribe(womensSeriesScratch => this.womensSeriesScratch = womensSeriesScratch, error => this.errorMessage = <any>error);
    }

}
