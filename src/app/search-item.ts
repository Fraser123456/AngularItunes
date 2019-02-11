import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

export class SearchItem {
    constructor(
        public track: string,
        public artist: string,
        public link: string,
        public thumbnail: string,
        public artistId: string) {
}
}
