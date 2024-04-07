import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { SharedService } from "../share/shared.service";

const path = "product"

@Injectable({
    providedIn: "root"
})
export class imageGenerateService {

    path: string = 'images?prompt='

    constructor(
        private shareService: SharedService
    ) {

    }


    generateImage(prompt: string) {
        return this.shareService.getRequest(this.path + prompt + '&base64_encode=true')
    }


}