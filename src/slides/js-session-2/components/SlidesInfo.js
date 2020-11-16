import _IntroList from '../intro/_IntroList';
import _Part1List from '../part-1/_Part1List';

// allows easy updating by multiple contributers by pulling arrays of slides
// from separate directories into slides property rather then listing all slides here
const SlidesInfo = {
  deck: {
    title: 'JavaScript Session 2: Functions',
  },
  slides: _IntroList.concat(_Part1List),
};

export default SlidesInfo;
