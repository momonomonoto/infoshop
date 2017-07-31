import React from "react";
import { rxConnect, ofActions } from "rx-connect";
import Rx from "rx";
import RxDOM from "rx-dom";
import 'rxjs/add/operator/debounceTime';



const searchGit = (value) => {
    console.log(value,'value');
     let arr = Rx.DOM
        .ajax({
            url: `https://api.github.com/users/${value}`,
            async: true
        });
     arr.subscribe(x=>console.log(x,'x'));
}


const  searchMyGit = (value) => {
    return Rx.DOM.ajax({
            url: `https://api.github.com/users/${value}`,
            async: true
        })


}

function searchWikipedia(search) {
    return Rx.DOM
        .ajax(`https://api.github.com/users/${search}`)
        .pluck("response")
        // .do(x=>console.log(x,'x'))
        // .map(([,login,,id]) => titles.map((login, id) => ({ title, url: urls[i] })));
        // Wikipedia has really weird response format o_O
}

@rxConnect(() => {
   let  state = {
        user:'ffff'
    };

    const actions = {
        search$: new Rx.Subject()
    }
    return {}
    //  Rx.Observable.merge(
    //     Rx.Observable::ofActions(actions),
    //
    //     actions.search$
    //         .pluck(0)
    //         .flatMapLatest(searchWikipedia)
    // )
})


export default class MyView extends React.Component {

    searchGitUser = (event) => {
        event.persist();
        const arr$ =  Rx.Observable.of(event)
            .pluck('target', 'value')
            .distinct()
            .flatMapLatest(x=>searchMyGit(x))

        arr$.subscribe(x=>this.setState({user:x.response}));
    }

    state = {

    }

    render() {
        const { articles, search } = this.props;
        console.log(this.state,'this.state.user');
        return (
            <div>
                <label>
                    Wiki search: <input type="text" onChange={ e => search(e.target.value)} />
                </label>

                { articles && (
                    <ul>
                        { articles.map(({ id  }) => (
                            <li><a href={id}>Hello</a></li>
                        ) ) }
                    </ul>
                )  }
            </div>
        );
    }
}

