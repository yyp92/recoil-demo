import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import CharacterCounter from './CharacterCounter'

function Test() {
    return (
        <RecoilRoot>
            <CharacterCounter />
        </RecoilRoot>
    );
}

export default Test