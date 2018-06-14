import React from 'react'
import {Dropbox} from 'dropbox'

const FOLDER_OPTS = { path: '/art' };

export default class ArtProvider extends React.Component {
  constructor(props) {
    super(props)
    this._dropbox = new Dropbox({ accessToken: 'wdELHrxOK2AAAAAAAAAA8z3t1UZW0etjojNAohcBL76o3Zmj1C9XMGZDA1IAXGPP' });
    this.state = {
      files: []
    }
  }

  componentDidMount() {
    this.fetchEntries()
      .then(entries => this.fetchFiles(entries))
      .then(files => this._updateFiles(files))
      .catch(console.error)
  }

  _updateFiles = (files) => this.setState({ files });

  async fetchEntries() {
    const { entries } = await this._dropbox.filesListFolder(FOLDER_OPTS)
    return entries;
  }

  async fetchFiles(metadata) {
    const files = await Promise.all(metadata.map(async ({id}) => await this.fetchFile(id)))
    return files;
  }

  async fetchFile(id) {
    const data = await this._dropbox.filesDownload({ path: id })
    return URL.createObjectURL(data.fileBlob)
  }

  render() {
    return this.props.children(this.state.files)
  }
}