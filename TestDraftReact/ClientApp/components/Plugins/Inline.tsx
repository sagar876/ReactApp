import * as React from 'react';
import { EditorState, ContentState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import {
    ItalicButton, BoldButton, UnderlineButton,
    CodeButton, HeadlineOneButton, HeadlineTwoButton,
    HeadlineThreeButton, UnorderedListButton,
    OrderedListButton, BlockquoteButton, CodeBlockButton,
} from 'draft-js-buttons';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';

const inlineToolbarPlugin = createInlineToolbarPlugin({
    structure: [
        BoldButton,
        ItalicButton,
        UnderlineButton,
        CodeButton,
        Separator,
        HeadlineOneButton,
        UnorderedListButton,
        OrderedListButton,
        BlockquoteButton,
        CodeBlockButton
    ]
});
const { InlineToolbar } = inlineToolbarPlugin;
const inlineToolbarPlug = [inlineToolbarPlugin];

//const plugins = [inlineToolbarPlugin, toolbarPlugin]
const text = 'Add your title';
const editorstyle = {
    editor: {
        border: '1px solid #ddd',
        cursor: 'text',
        padding: 16,
        background: '#fefefe',
        borderRadius: 2,
        marginBottom: 2,
        boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
        boxSizing: 'border-box',
        margin: 16,
    },

    header1: {
        fontSize: 100,
    },

    headlineButtonWrapper: {
        display: 'inline-block',
    },

    headlineButton: {
        background: '#fbfbfb',
        color: '#888',
        fontSize: 18,
        border: 0,
        paddingTop: 5,
        verticalAlign: 'bottom',
        height: 34,
        width: 36,
    },
}

export default class Inline extends React.Component {
    onChange: (editorState: any) => any;
    state: { editorState: EditorState; };
    constructor() {
        super();
        this.state = { editorState: EditorState.createWithContent(ContentState.createFromText(text)) };
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
                <div style={editorstyle.editor}>
                    <Editor style={editorstyle.header1} editorState={this.state.editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} plugins={inlineToolbarPlug} />
                    <InlineToolbar />
                </div>
            </div>
        );
    }
}

