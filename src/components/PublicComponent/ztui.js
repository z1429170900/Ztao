import Button from './Button/Button';
import Bubble from './Bubble/Bubble';
import Cascader from './Cascader/Cascader';
import Input from './Input/TransInput';
import Menu from './Menu/Menu';
import Table from './Table/Table';

// VOC
import DropMenu from './VOC/dropMenu/dropMenu';
import DropItem from './VOC/dropItem/dropItem';
import DropSubItem from './VOC/dropSubItem/dropSubItem';
import DropGroup from './VOC/dropGroup/dropGroup';

// directive
import zClickOutSide from './Directive/zClickOutSide';

export default {
    install: (Vue) => {
      Vue.component('z-button', Button);
      Vue.component('z-bubble', Bubble);
      Vue.component('z-cascader', Cascader);
      Vue.component('z-input', Input);
      Vue.component('z-menu', Menu);
      Vue.component('z-table', Table);

      // VOC
      Vue.component('voc-drop-menu', DropMenu);
      Vue.component('voc-drop-item', DropItem);
      Vue.component('voc-drop-sub', DropSubItem);
      Vue.component('voc-drop-group', DropGroup);

      // directive
      Vue.directive("z-click-outside", zClickOutSide)
    }
}