/**
 * @file error type
 * @author chuck7 (chuck7liu@gmail.com)
 * @data 17/6/1
 */

module.exports = {
    validationError: {
        name: 'ValidationError',
        message: 'Value for one of the parameters in request is invalid.'
    },
    tokenError: {
        name: 'TokenError',
        message: 'Invalid token.'
    },
    storageError: {
        name: 'StorageError',
        message: 'Something wrong happens when storing data.'
    },
    idNotExistError: {
        name: 'IdNotExistError',
        message: `The resource id you operating doesn't exist.`
    },
    deleteAlreadyPublishedDraftError: {
        name: 'deleteAlreadyPublishedDraftError',
        message: `It's forbidden to deleting draft that already published.`
    },
    seedingError: {
        name: 'seedingError',
        message: 'Something wrong happens when seeding initial data.'
    }
}