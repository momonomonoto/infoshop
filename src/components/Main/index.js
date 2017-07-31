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
        });
}

@rxConnect(() => {
    const actions = {
        search$: new Rx.Subject()
    }

    return Rx.Observable.merge(
        Rx.Observable::ofActions(actions),

        actions.search$
            .pluck(0)
            .flatMapLatest(searchMyGit)
            .map(articles => ({ articles }))
    )
})


export default class MyView extends React.Component {

    state = {
        user:''
    };

    searchGitUser = (event) => {
        event.persist();
        const arr$ =  Rx.Observable.of(event)
            .pluck('target', 'value')
            .distinct()
            .flatMapLatest(x=>searchMyGit(x))

        arr$.subscribe(x=>this.setState({user:x.response}));
    }


    render() {
        const { articles, search } = this.props;
        console.log(this.state,'this.state');
        return (
            <div>
                <label>
                    Wiki search: <input type="text" onChange={this.searchGitUser} />
                    <p>User:{this.state.user}</p>
                </label>

                { articles && (
                    <ul>
                        { articles.map(({ title, url }) => (
                            <li><a href={url}>{title}</a></li>
                        ) ) }
                    </ul>
                )  }
            </div>
        );
    }
}

