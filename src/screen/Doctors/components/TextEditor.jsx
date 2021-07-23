import React, { memo, useState, useEffect } from 'react'
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import PropTypes from 'prop-types'

const ToolbarOptions = {
  options: [
    'inline',
    'blockType',
    'list',
    'textAlign',
    'link',
    'emoji',
    'image',
    'history',
  ],
  inline: {
    options: ['bold', 'italic', 'underline'],
  },
}

const TextEditorTwo = memo((field) => {
  const { input } = field
  const { onChange, value } = input
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  // field
  console.log('field', field)
  const onEditorStateChange = (items) => {
    setEditorState(items)
    if (onChange) {
      onChange(draftToHtml(convertToRaw(items.getCurrentContent())))
    }
  }

  useEffect(() => {
    var editorState = EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(value)),
    )
    setEditorState(editorState)
  }, [value])
  console.log('field value', value)
  return (
    <div className="text-editor">
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={ToolbarOptions}
      />
    </div>
  )
})

TextEditorTwo.propTypes = {
  onChange: PropTypes.func,
}

TextEditorTwo.defaultProps = {
  onChange: () => {},
}

export default TextEditorTwo
