import _IntroList from '../intro/_IntroList';
import _Part1List from '../part-1/_Part1List';
import _Part2List from '../part-2/_Part2List';
import _Part3List from '../part-3/_Part3List';
import _ReviewSession1List from '../review-session-1/_ReviewSession1List';

// allows easy updating by multiple contributers by pulling arrays of slides
// from separate directories into slides property rather then listing all slides here
const SlidesInfo = {
  deck: {
    title: 'JavaScript Session 2: Functions',
  },
  slides: _IntroList.concat(
    _ReviewSession1List,
    _Part1List,
    _Part2List,
    _Part3List
  ),
};

export default SlidesInfo;
