let imgElement = document.getElementById('srcImage')
let inputElement = document.getElementById('fileInput');

(function(){
    let src = cv.imread('srcImage');
    let dst = new cv.Mat();
    let M = cv.Mat.eye(3, 3, cv.CV_32FC1);
    M.data[0][1] = 4; M.data[0][2] = 45; M.data[0][3] = 12;
    M.data[1][1] = 102; M.data[1][2] = 22; M.data[1][3] = 12;
    M.data[2][1] = 12; M.data[2][2] = -22; M.data[2][3] = 222;
    let anchor = new cv.Point(-1, -1);
    // You can try more different parameters
    cv.filter2D(src, dst, cv.CV_8U, M, anchor, 0, cv.BORDER_DEFAULT);
    cv.imshow('smoothing', dst);

    let ksize = new cv.Size(3, 3);
    cv.blur(src, dst, ksize, anchor, cv.BORDER_DEFAULT);
    cv.imshow('blur', dst);

    cv.boxFilter(src, dst, -1, ksize, anchor, true, cv.BORDER_DEFAULT)
    cv.imshow('boxFilter', dst);

    cv.GaussianBlur(src, dst, ksize, 99, 0, cv.BORDER_DEFAULT);
    cv.imshow('GaussianBlur', dst);

    cv.medianBlur(src, dst, 5);
    cv.imshow('medianBlur', dst);

    M = cv.Mat.ones(5, 5, cv.CV_8U);
    cv.erode(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
    cv.imshow('erode', dst);

    cv.dilate(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());
    cv.imshow('dilate', dst);

    cv.Canny(src, dst, 50, 100, 3, false);
    cv.imshow('canny', dst);

    cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
    cv.equalizeHist(src, dst);
    cv.imshow('hist', dst);

    src.delete(); dst.delete(); M.delete();
})();
