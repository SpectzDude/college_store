import { fileTypeFromBuffer, fileTypeFromFile } from 'file-type';

export function dateToEpochApi(date) {
    return Math.floor(date.getTime() / 1000);
}

// Function to convert epoch to date
export function epochToDateApi(epoch) {
    return new Date(epoch * 1000);
}
const imageMaxSize = 10000000; // bytes
const acceptedFileTypesArray = ["image/x-png", "image/png", "image/jpg", "image/jpeg"];




export const verifyFile = async (fileBuffer) => {
    const currentFileSize = fileBuffer.length;
    const sizeInMb = Math.round((currentFileSize / 1000000) * 100) / 100;

    if (currentFileSize > imageMaxSize) {
        return { status: false, message: `Image should be less than ${sizeInMb} MB` };
    }

    const type = await fileTypeFromBuffer(fileBuffer);

    if (!type || !acceptedFileTypesArray.includes(type.mime)) {
        return { status: false, message: `File Not Allowed. Accepted formats: ${acceptedFileTypesArray.join(", ")}` };
    }

    return { status: true, message: "" };
};

