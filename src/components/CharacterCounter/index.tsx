import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

/**
 * Atom 是组件可以订阅的 state 单位。
 * selector 可以同步或异步改变此 state。
 */


// TextInput 组件
const textState = atom({
    // unique ID (with respect to other atoms/selectors)
    key: 'textState', 

    // default value (aka initial value)
    default: '', 
}); 

function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event: any) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            
            Echo: {text}
        </div>
    );
}


// CharacterCount组件
const charCountState = selector({
    // unique ID (with respect to other atoms/selectors)
    key: 'charCountState', 
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
});

function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
}


export default function CharacterCounter() {
    return (
        <div>
            <TextInput />
            <CharacterCount />
        </div>
    );
}