import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import { canUseDOM } from 'react/lib/ExecutionEnvironment';

var ace;
class Editor extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    editorValue: PropTypes.string,
    onChange: PropTypes.func
  };

  constructor() {
    super();

    if (canUseDOM) {
      ace = require('brace');
      require('brace/mode/json');

      this.editorRef = null;
    }
  }

  onChange() {
    // don't fire callback if change is from setValue
    if (this.editor.curOp && this.editor.curOp.command.name){
      this.props.onChange(this.editor.getSession().getValue());
    }
  }

  componentDidMount() {
    if (canUseDOM) {
      this.editor = ace.edit(React.findDOMNode(this.editorRef));
      this.editor.getSession().setMode('ace/mode/json');
      this.editor.setValue(this.props.editorValue, -1);
      this.editor.on('change', this.onChange.bind(this));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.editorValue !== nextProps.editorValue) {
      let cursorPosition = this.editor.session.selection.toJSON();
      this.editor.setValue(nextProps.editorValue);
      this.editor.session.selection.fromJSON(cursorPosition);
    }
  }

  render() {
    var divStyle = {
      width: '500px',
      height: '200px'
    };

    return (
      <div
        className="Editor"
        style={divStyle}
        ref={(editorRef) => this.editorRef = editorRef}></div>);
  }
}

export default Editor;
