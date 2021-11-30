import {Injectable} from '@angular/core';

import * as $ from 'jquery';

declare let document: any;

interface Script {
    src: string;
    loaded: boolean;
}

@Injectable()
export class ScriptLoaderService {
    public _scripts: Script[] = [];
    private tag;

    /**
     * @deprecated
     * @param tag
     * @param {string} scripts
     * @returns {Promise<any[]>}
     */
    load(tag, ...scripts: string[]) {
        this.tag = tag;
        scripts.forEach((src: string) => {
            if (!this._scripts[src]) {
                this._scripts[src] = {src, loaded: false};
            }
        });

        const promises: any[] = [];
        scripts.forEach((src) => promises.push(this.loadScript(this.tag, src)));

        return Promise.all(promises);
    }

    /**
     * Lazy load list of scripts
     * @param tag
     * @param scripts
     * @param loadOnce
     * @returns {Promise<any[]>}
     */
    loadScripts(tag, scripts, loadOnce?: boolean) {
        this.tag = tag;
        loadOnce = loadOnce || false;

        scripts.forEach((script: string) => {
            if (!this._scripts[script]) {
                this._scripts[script] = {src: script, loaded: false};
            }
        });

        const promises: any[] = [];
        scripts.forEach(
            (script) => promises.push(this.loadScript(this.tag, script, [], loadOnce)));

        return Promise.all(promises);
    }

    /**
     * Lazy load a single script
     * @param tag
     * @param {string} src
     * @param functions
     * @param loadOnce
     * @returns {Promise<any>}
     */
    loadScript(tag, src: string, functions?: string[], loadOnce?: boolean) {
        this.tag = tag;
        this.destroyScript();
        loadOnce = loadOnce || false;

        if (!this._scripts[src]) {
            this._scripts[src] = {src, loaded: false};
        }

        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (this._scripts[src].loaded && loadOnce) {
                resolve({src, loaded: true});
            }
            else {
                // load script this.tag
                const script = $('<script/>').
                attr('type', 'text/javascript').
                attr('src', this._scripts[src].src);
                if (functions.length) {
                    functions.forEach(res => {
                        script.append(res);
                    });
                }
                $(this.tag).append(script);
                this._scripts[src] = {src, loaded: true};
                resolve({src, loaded: true});
            }
        });
    }

    destroyScript() {
       $(this.tag).find('script').remove();
    }
}
