import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { Editor, EditorState, RichUtils } from 'draft-js';

const styles = {
    root: {
        fontFamily: '\'Georgia\', serif',
        fontSize: 14,
        padding: 20,
        width: 1400,
    },
    editor: {
        borderTop: '1px solid #ddd',
        cursor: 'text',
        fontSize: 16,
        marginTop: 20,
        minHeight: 400,
        paddingTop: 20,
        border: '1px solid red',
        padding: 10
    },
    controls: {
        fontFamily: '\'Helvetica\', sans-serif',
        fontSize: 14,
        marginBottom: 10,
        userSelect: 'none',
    },
    styleButton: {
        color: '#999',
        cursor: 'pointer',
        marginRight: 16,
        padding: '2px 0',
    },
};

export default class Basic extends React.Component<RouteComponentProps<{}>, {}> {
    onChange: (editorState: any) => any;
    focus = () => { this.focus(); };
    state: { editorState: EditorState; };
    constructor() {
        super();
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = (editorState) => this.setState({ editorState });
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    //Handle Key commands from Draft
    handleKeyCommand(command: string, editorState: EditorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    render() {
        return (
            <div id="editor">
                <h1>Draft JS Editor Sample </h1>
                <div style={styles.root}>
                    <div>Type In the Red Box:</div>
                    <div style={styles.editor} onClick={this.focus}>
                        <Editor editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} />

                    </div>
                </div>
            </div>
        )
    }
}