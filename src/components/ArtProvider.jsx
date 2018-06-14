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
    this.loadMetadata()
      .then(this.handleMetadataResult)
      .catch(this.handleFailure)
  }

  /* Response Handling */
  handleMetadataResult = (result) => result.entries.forEach(this.loadFiledata)
  
  handleFailure = (err) => console.error(err)

  /* Data Fetching */
  loadMetadata = () => this._dropbox.filesListFolder(FOLDER_OPTS)
  
  loadFiledata = (metadata) => this._dropbox.filesDownload({ path: metadata.id })
    .then(this.updateFileState)

  /* Data Mutation */
  updateFileState = (filedata) => this.setState((state) => this.mutateFileState(state.files, filedata.fileBlob))
  
  mutateFileState = (files, newFileBlob) => ({ 
    files: [...files, URL.createObjectURL(newFileBlob)]
  })

  // Deterministic order and all-at-once loading, but over 4x slower!
  //
  // componentDidMount() {
  //   this.fetchEntries()
  //     .then(entries => this.fetchFiles(entries))
  //     .then(files => this._updateFiles(files))
  //     .catch(console.error)
  // }

  // _updateFiles = (files) => this.setState({ files });

  // async fetchEntries() {
  //   const { entries } = await this._dropbox.filesListFolder(FOLDER_OPTS)
  //   return entries;
  // }

  // async fetchFiles(metadata) {
  //   const files = await Promise.all(metadata.map(async ({id}) => await this.fetchFile(id)))
  //   return files;
  // }

  // async fetchFile(id) {
  //   const data = await this._dropbox.filesDownload({ path: id })
  //   return URL.createObjectURL(data.fileBlob)
  // }

  render() {
    return this.props.children(this.state.files)
  }
}