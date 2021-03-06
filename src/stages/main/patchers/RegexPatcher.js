import NodePatcher from '../../../patchers/NodePatcher';
import escapeSpecialWhitespaceInRange from '../../../utils/escapeSpecialWhitespaceInRange';

export default class RegexPatcher extends NodePatcher {
  patchAsExpression() {
    escapeSpecialWhitespaceInRange(this.contentStart + 1, this.contentEnd - 1, this);
  }
}
