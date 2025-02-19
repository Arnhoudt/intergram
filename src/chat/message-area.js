import dateFormat from 'dateformat'
import { h, Component } from 'preact';

const dayInMillis = 60 * 60 * 24 * 1000;

export default class MessageArea extends Component {

    componentDidMount() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    componentDidUpdate() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    render(props,{}) {
        const currentTime = new Date();
        console.log(props.messages)
        return (
            <ol class="chat">
                {props.messages.map(({name, text, from, time}) => {
                    if (from === 'visitor') {
                        name = "You";
                    }
                    return (
                        <li class={from}>
                            <div class="msg">
                                <p>{(text.length > 0)?text.split('\n').map((line, i) => {return <p class="line">{line}</p>;}): ""}</p>
                                { (props.conf.displayMessageTime) ?
                                    <div class="time">
                                        {
                                            currentTime - new Date(time) < dayInMillis ?
                                                dateFormat(time, "HH:MM") :
                                                dateFormat(time, "m/d/yy HH:MM")
                                        }
                                    </div> 
                                    :
                                    ''
                                }
                            </div>
                        </li>
                    );
                })}
            </ol>
        );
    }

}
