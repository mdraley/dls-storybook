import { ArvestGroup } from '../../global/ts/storybookGrouping';
import argTypes from './args/arvest-modal.args';

export default {
  'title': `${ArvestGroup}/Modal`,
  argTypes
};

const Component = ({
  title,
  size,
  content,
  noscroll
}):string => `
  <script>
  const showModal = (id) => {
    document.getElementById(id).setAttribute('visible', true);
  };
  const hideModal = (id) => {
    document.getElementById(id).setAttribute('visible', false);
  }
  </script>
  <arvest-button-primary label="Show Modal" onclick="showModal('overlay-1')"></arvest-button-primary>
  <arvest-overlay id="overlay-1"  ${noscroll ? 'noscroll' : ''}>
    <arvest-modal heading="${title}" size="${size}" id="modal-1">
      ${content}
    </arvest-modal>
  </arvest-overlay>
  <script>
    document.getElementById('modal-1').addEventListener('clickClose', event => { hideModal('overlay-1') });
  </script>
  <br />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non velit tellus. Ut placerat elit non sodales consequat. Vivamus efficitur mi at urna convallis pretium. Sed efficitur laoreet nunc sed hendrerit. Integer eget tristique libero. Proin lobortis tellus vitae condimentum tincidunt. Quisque dictum nunc in feugiat eleifend. In maximus tellus at pharetra congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur ultrices, felis ac interdum maximus, sapien lacus eleifend massa, at porttitor urna lacus vitae ipsum. In nec commodo nunc, sit amet placerat purus.</p>

  <p>Morbi porttitor urna ante, quis porttitor lorem tincidunt quis. Aenean condimentum ac leo eget posuere. Etiam at nisl ut justo consequat egestas ut ut velit. Duis volutpat, mi at rhoncus fringilla, elit magna scelerisque leo, ut efficitur felis urna nec lectus. Fusce eget imperdiet tortor. Aliquam consectetur venenatis nunc ut tempus. Mauris a tempus lacus, et laoreet magna. Nulla at arcu scelerisque, elementum ante eu, rutrum orci. Cras nec elit dolor. Vivamus ultricies, tellus at pulvinar ullamcorper, ex magna dictum felis, a imperdiet urna urna non nunc. Pellentesque pharetra tempus libero, tincidunt facilisis nibh porta sed. Nam non sem id nisl gravida pulvinar ac quis augue.</p>

  <p>Suspendisse varius vitae lacus sit amet interdum. Donec nec diam eu felis interdum pharetra. Nulla rutrum tempor nisi, a commodo elit rutrum nec. Maecenas aliquet tincidunt velit, et tincidunt mi. Suspendisse pellentesque, diam sed ultrices rhoncus, ipsum elit pellentesque dolor, nec posuere ante libero sed dolor. Nam varius eros ut eros pharetra tempus. Quisque id scelerisque sem, quis tristique libero. Vestibulum sagittis gravida libero, vel commodo diam rutrum eu. Proin ante lacus, mollis id orci et, gravida semper massa.</p>

  <p>Donec hendrerit nisi a arcu maximus, id laoreet mauris posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus diam sapien, egestas lacinia lacus sit amet, lacinia congue nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean hendrerit in nunc id sollicitudin. Pellentesque commodo turpis a felis tincidunt gravida. Nunc faucibus consequat erat, ut ultricies nisi dictum finibus. Donec ullamcorper placerat facilisis.</p>

  <p>Sed commodo porttitor est id dictum. Praesent faucibus est quis ultricies sagittis. Cras dignissim urna vel nunc vehicula, elementum eleifend eros dignissim. Aenean in porta nulla, at facilisis leo. Phasellus justo mi, congue at lorem eget, luctus vestibulum enim. Aenean et elit condimentum, faucibus tortor id, tincidunt tortor. Fusce porttitor sem id velit egestas, placerat facilisis dolor accumsan. Curabitur nisl metus, facilisis sed mauris nec, volutpat malesuada quam. Aenean commodo vulputate diam, non mollis neque molestie vitae. Duis nulla nibh, interdum in orci vitae, sollicitudin pulvinar libero.</p>

  <p>Etiam nec faucibus nisi, id semper velit. Pellentesque sit amet ullamcorper nulla, non vehicula ante. Nunc bibendum nisl vitae nulla fermentum congue. Vivamus non quam eget nibh mattis efficitur. Donec nec sem id risus blandit venenatis vitae sed velit. Integer auctor nisl nisi, eleifend commodo sapien pretium efficitur. Nullam vel leo consequat, aliquet diam vitae, gravida leo. Quisque lobortis in diam at fermentum. Aenean velit dolor, viverra sit amet tincidunt sit amet, mattis ut risus. Integer at mauris scelerisque, cursus ipsum eget, bibendum dui. Nullam vestibulum at est non pulvinar. Vivamus tincidunt maximus ex id maximus.</p>

  <p>Integer accumsan ligula velit, rutrum sodales dui sodales id. Aliquam dui nibh, commodo in venenatis ac, congue at mi. Morbi a varius ligula. Nullam porttitor, purus a consequat finibus, lorem arcu sagittis justo, sit amet finibus mauris turpis a nisi. Maecenas congue tortor est, eget congue risus facilisis id. Curabitur luctus purus elit, ac fringilla odio dapibus quis. Suspendisse tempus quam ut mauris tempor, viverra pellentesque dui bibendum. Sed congue laoreet justo a faucibus. Nam lobortis, mauris ac dignissim pretium, nulla augue scelerisque mi, et venenatis sem nulla vel mi. Vivamus bibendum risus ut arcu fermentum, ut suscipit felis accumsan. Morbi at volutpat nunc. Quisque posuere metus et nunc pretium, quis feugiat erat imperdiet. Duis quis ligula elit.</p>

  <p>Phasellus nisl mauris, fringilla vitae quam vel, tempor pellentesque libero. Vivamus volutpat, tellus ut hendrerit porttitor, mi orci sodales nibh, non molestie est odio ut urna. Suspendisse luctus dolor felis, ut finibus felis dictum viverra. Maecenas sit amet ante nulla. Nam luctus cursus eleifend. Cras id lobortis risus, non eleifend elit. Curabitur lectus ante, aliquam non lacus in, finibus scelerisque tortor.</p>

  <p>Morbi sapien velit, mollis eu sem ac, fermentum condimentum risus. Nulla vitae massa a erat laoreet ullamcorper in ut nulla. Aliquam cursus eget sapien id ullamcorper. Phasellus imperdiet sem at lorem rutrum, a iaculis lorem euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vel sem libero. Praesent eleifend purus non suscipit gravida. Sed vitae dolor at nisi lobortis ornare. Aliquam ut tortor sagittis, commodo sem id, vestibulum lacus. Sed id quam condimentum lorem condimentum lobortis a imperdiet erat. Proin in massa velit. Sed est quam, rutrum nec neque et, malesuada pharetra nibh. Nullam non auctor mi. Nam porta mollis sapien vel fermentum. Ut varius bibendum tincidunt.</p>

  <p>Fusce iaculis aliquam lectus, sed euismod mi facilisis at. In hac habitasse platea dictumst. Sed id volutpat sem, sed hendrerit felis. Ut sagittis augue eu nulla porta imperdiet. Integer in purus aliquam, venenatis nibh sit amet, gravida nulla. Ut luctus viverra arcu, a bibendum ex vulputate vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ac dignissim ex. Pellentesque nec ipsum dolor. Aenean pharetra vestibulum libero sed tempus. Suspendisse malesuada massa non lectus facilisis placerat.</p>

  <p>Aenean ornare sapien sit amet pulvinar cursus. Suspendisse nisi eros, cursus id erat nec, volutpat commodo lorem. Sed sit amet hendrerit risus, non blandit dolor. Etiam lacinia, quam et tincidunt sollicitudin, eros est bibendum risus, nec interdum risus elit at ligula. Aliquam egestas tempus dictum. Morbi ultricies arcu urna, nec posuere turpis pulvinar vel. Quisque pretium ex nec mi efficitur pellentesque. Maecenas sed ultricies enim. Nunc tristique vulputate dolor, in elementum quam. Sed ut egestas nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vestibulum aliquet quam, in mattis mi porttitor eget. Cras feugiat accumsan nisi, sit amet porttitor nunc placerat ac. Ut interdum magna lacus, ac semper orci faucibus sit amet. Nunc pharetra vestibulum lorem. Fusce a velit vitae risus ornare ullamcorper a a nulla.</p>

  <p>Quisque nec nisi eget quam hendrerit condimentum ac eget eros. Nullam a arcu tortor. Proin viverra commodo ligula quis mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam aliquam cursus orci, nec ultricies urna varius sed. Suspendisse dignissim ipsum cursus ultricies fringilla. Nulla varius ipsum ut posuere suscipit. Fusce ornare dapibus magna, nec ultrices nisl auctor eget. Aenean finibus leo vitae augue vulputate, sed eleifend erat aliquet. Fusce metus libero, tincidunt et aliquam a, faucibus at felis. Aenean fermentum mi sed ligula ullamcorper accumsan. Nullam auctor libero sit amet euismod facilisis. Sed ut ipsum et dui mollis ornare. Fusce facilisis blandit ligula non feugiat. Mauris ac malesuada mi.</p>

  <p>Suspendisse consequat dictum sollicitudin. Maecenas sed gravida libero. Quisque sollicitudin at mauris in rhoncus. Praesent et leo ac mauris finibus tempor eu gravida mi. Morbi eget justo congue, laoreet nibh non, sodales sem. Duis efficitur mauris eu urna malesuada placerat. Aenean ut magna id orci sagittis tempus non sed dolor. Fusce ac mattis mauris, id egestas leo. Mauris tristique nulla quis neque blandit venenatis. Praesent sit amet bibendum massa. Nulla scelerisque, erat ac dictum eleifend, augue sapien ultrices est, id suscipit odio odio fermentum ante. Etiam gravida leo urna, finibus auctor metus eleifend at. Ut nisi tortor, ornare et mollis vitae, semper in risus. Nunc dignissim porta ullamcorper.</p>

  <p>Cras velit urna, lacinia eu ultrices ut, vehicula ut arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec auctor posuere placerat. Nam faucibus ultrices elementum. Praesent tincidunt et ligula auctor molestie. Donec in pellentesque nibh. Maecenas volutpat, lacus vel rutrum condimentum, odio magna pretium nunc, a suscipit turpis purus mollis tortor.</p>

  <p>Maecenas ut mollis arcu. Nam quis sollicitudin massa. In suscipit dignissim erat ac interdum. Nulla dictum nisi in nibh rhoncus scelerisque. Nullam tempus tempus ante a sodales. Donec at leo ac ante pretium fringilla. Nullam vitae urna in nulla sodales hendrerit nec eget mi. Ut eget odio nec lacus pulvinar ultricies.</p>
`;

const args = {
  'title': 'Modal Title',
  'size': 'small',
  'content': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ante magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi rutrum, nibh in viverra eleifend, erat ipsum hendrerit nibh, et sollicitudin enim magna ut urna. Nam ultrices elementum tortor, quis rhoncus orci suscipit tempor. Morbi risus mauris, facilisis quis condimentum sed, varius quis dui. Aenean in scelerisque diam.</p><arvest-modal-footer><div class="button-wrap"><arvest-button-secondary issmall label="Cancel" onclick="hideModal(\'overlay-1\')" style="margin-right: .75rem"></arvest-button-secondary><arvest-button-primary issmall label="Confirm" onclick="hideModal(\'overlay-1\')"></arvest-button-primary></div></arvest-modal-footer>',
  'noscroll': true
};

export const Modal = Component.bind({});
Modal.args = {
  ...args
};
