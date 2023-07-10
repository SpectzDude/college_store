import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { AddAPhoto, Close, CloudUpload, Crop, Image } from "@mui/icons-material";
import { Box, Grid, Input, InputLabel, Typography, DialogActions, DialogContent, Divider, DialogTitle, IconButton } from "@mui/material";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { grey, red } from "@mui/material/colors";
import { useDispatch } from "react-redux";


export default function ImageUploaderPopUp({ title = "Title", id = 0, action, open, setOpen, cropData, setCropData }) {
    const dispatch = useDispatch();
    const [img, setImage] = useState({ imgSrc: null, imgSrcExt: null });
    const [error, setError] = useState(null);
    const [cropper, setCropper] = useState(false);
    const [showCropper, setShowCropper] = useState(false);

    const imageMaxSize = 10000000; // bytes
    const acceptedFileTypesArray = ["image/x-png", "image/png", "image/jpg", "image/jpeg"];
    let uploadEvent = false;

    const verifyFile = (files) => {
        if (files && files.length > 0) {
            const currentFile = files[0];
            const currentFileType = currentFile.type;
            const currentFileSize = currentFile.size;
            const sizeInMb = Math.round((currentFileSize / 1000000) * 100) / 100;
            if (currentFileSize > imageMaxSize) {
                setError("File size not allowed" + sizeInMb);
                setShowCropper(false);
                return false;
            }
            if (!acceptedFileTypesArray.includes(currentFileType)) {
                setShowCropper(false);
                let errorString = <>
                    <p>File Not Allowed. Accepted formats</p> <ul>
                        <li>   {acceptedFileTypesArray.join(", ")}</li>
                    </ul>
                </>;
                setError(errorString);
                return false;
            }
            return true;
        }
    };
    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            dispatch(setCropData(cropper.getCroppedCanvas().toDataURL()));
        }
    };

    const handleClose = () => {
        dispatch(setOpen(false));
        setCropData(null);
        setImage({ imgSrc: null, imgSrcExt: null });
        setError(null);
    };

    const handleImage = (e) => {
        setError("");
        let files = e.target.files;

        if (files && files.length > 0) {

            uploadEvent = true;
            const isVerified = verifyFile(files);
            if (isVerified) {
                const currentFile = files[0];
                setShowCropper(true);
                setImage({
                    file: currentFile,
                    imgSrc: URL.createObjectURL(currentFile)
                });
            }
        }
    };
    const handleSubmit = () => {

        dispatch(action({ id: id, image: img }));
        setImage({ imgSrc: null, imgSrcExt: null });
    };
    const customUploadStyle = {
        padding: "2px 4px",
        cursor: "pointer"
    };
    const iconWrapper = {
        margin: "0.6rem",
        backgroundColor: "primary.main",
        py: 1,
        px: 2,
        cursor: "pointer",
        borderRadius: "20px",
        borderWidth: "2px",
        borderColor: "grey.main",
        "&:hover": {
            backgroundColor: "primary.dark"
        }
    };

    return (
        <Grid>
            <Dialog maxWidth={"200px"} open={open} onClose={handleClose} sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ backgroundColor: "primary.light" }}>
                    <DialogTitle sx={{ color: "white.main", fontWeight: 700 }}>{title}</DialogTitle>
                    <Divider sx={{ width: "100%" }} />
                    <DialogContent sx={{ display: "flex", justifyContent: "center", flexDirection: "column", backgroundColor: "white.main" }}>
                        {showCropper ?
                            <Cropper
                                style={{ height: "250px", width: "250px" }}
                                zoomTo={0.5}
                                initialAspectRatio={1 / 1}
                                preview=".img-preview"
                                src={img.imgSrc}
                                viewMode={1 / 1}
                                minCropBoxHeight={7}
                                minCropBoxWidth={7}
                                background={false}
                                responsive={true}
                                autoCropArea={1}
                                checkOrientation={false}
                                onInitialized={(instance) => {
                                    setCropper(instance);
                                }}
                                guides={true}
                            />
                            :
                            <Grid sx={{ width: "500px", height: "500px", display: "flex", justifyContent: "center" }}>
                                <Image sx={{ mx: "auto", my: "auto", transform: "scale(5.8)", color: grey[500], opacity: 0.8 }} />
                            </Grid>
                        }
                        <Grid sx={{ display: "flex", justifyContent: "center", border: 1 }}>
                            {cropData && <img style={{ width: "100%" }} src={cropData} alt="cropped" />}
                        </Grid>
                        <Grid sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", py: 1 }} >
                            <Grid>
                                <InputLabel htmlFor="file-upload" sx={customUploadStyle}>
                                    <AddAPhoto /> <Typography sx={{ display: "inline", pb: 0.8 }}>Add</Typography>
                                </InputLabel>
                                <Input
                                    id="file-upload"
                                    type="file"
                                    onChange={handleImage}
                                    style={{ display: "none" }}
                                />
                            </Grid>
                            <Grid>
                                {error && <Typography variant="p" sx={{ textAlign: "center", color: red[500] }}>{error}</Typography>}
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions sx={{ display: "flex", justifyContent: "center", backgroundColor: "white.main" }}>
                        <IconButton sx={iconWrapper} onClick={handleClose}>
                            <Typography variant="p" sx={{ fontSize: "14px", textAlign: "center", color: "white.main" }}>{"Close"}
                            </Typography><Close sx={{ color: "white.main", fontSize: "17px" }} /></IconButton>
                        {cropData && <IconButton sx={iconWrapper} variant="contained" onClick={handleSubmit}>
                            <CloudUpload sx={{ color: "white.main", fontSize: "17px" }} />
                            <Typography variant="p" sx={{ fontSize: "14px", textAlign: "center", color: "white.main" }}>{"Upload"}</Typography>

                        </IconButton>}
                        <IconButton disabled={uploadEvent} sx={iconWrapper} variant="contained" onClick={getCropData}>
                            <Typography variant="p" sx={{ fontSize: "14px", textAlign: "center", color: "white.main" }}>{"Crop"}</Typography>
                            <Crop disabled={uploadEvent} sx={{ color: "white.main", fontSize: "17px" }} /></IconButton>

                    </DialogActions>
                </Box>
            </Dialog>
        </Grid>
    );
}
