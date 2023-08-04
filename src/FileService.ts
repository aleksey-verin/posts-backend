import * as uuid from 'uuid'
import * as path from 'path'
import { UploadedFile } from 'express-fileupload'

class FileService {
  saveFile(file: UploadedFile | UploadedFile[]) {
    try {
      const fileName = uuid.v4() + '.jpg'
      const filePath = path.resolve('static', fileName)
      if (!Array.isArray(file)) {
        file.mv(filePath)
      }
      return fileName
    } catch (error) {
      console.log(error)
    }
  }
}
export default new FileService()
