import React from "react";
import { rxConnect, ofActions } from "rx-connect";
import Rx from "rx";
import RxDOM from "rx-dom";
import 'rxjs/add/operator/debounceTime';

export default class MyView extends React.Component {
    state = {
        user:''
    };

    searchMyGit = (value) => {
        return Rx.DOM.ajax({
            url: `http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1`,
                async: true
        })
    }

    searchGitUser = (event) => {
        const arr$ =  Rx.Observable.of(event)
            .pluck('target', 'value')
            .distinct()
            .catch(error => Rx.Observable.of(error))
            .flatMapLatest(x=>this.searchMyGit(x))

        arr$.subscribe(x=>this.setState({user:x.response}));
    }

    render() {
        return (
            <div>
                <label>
                    Wiki search: <input type="text" onInput={this.searchGitUser} />
                </label>
                <div>
                    User:{this.state.user}
                </div>
            </div>
        );
    }
}

