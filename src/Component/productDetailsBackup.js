import { useEffect, useState } from "react";

const ProductDetails = () => {
    const [breadcumHtml, setBreadcumHtml] = useState([]);
    const [breadcum, setBreadcum] = useState([]);

    const [data, setData] = useState([
        {
            folderName: "TOYATO", id: 1, subFolder: [
                {
                    folderName: "SUV", id: 11, subFolder: [
                        {
                            folderName: "Rav4",
                            id: 111,
                            subFolder: [
                                {
                                    folderName: "Rav4 LE", id: 1111, subFolder: [
                                        {
                                            folderName: "Rav4 XLE",
                                            id: 11111
                                        },
                                        {
                                            folderName: "Rav4 XLE Premium",
                                            id: 11112
                                        },
                                        {
                                            folderName: "Rav4 Adventure",
                                            id: 11113
                                        },
                                        {
                                            folderName: "Rav4 TRD Off-Road",
                                            id: '11114'
                                        },
                                        {
                                            folderName: "Rav4 Limited",
                                            id: 11115
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            folderName: "Highlander", id: 112
                        },
                        {
                            folderName: "4Runner", id: 113
                        },
                        {
                            folderName: "Sequaia", id: 114
                        }
                    ]
                },
                { folderName: "Sedan", id: 12 },
                { folderName: "Truck", id: 13 },
                { folderName: "Hybrid/Electric", id: 14 },
                { folderName: "Sports Car", id: 15 }
            ],
        },
        { folderName: "UNDERCONSUMER", id: 2 },
        { folderName: "TRAVELINSURED", id: 3 },
    ]);


    useEffect(() => {
        setTimeout(() => {
            const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
            const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
            setBreadcumHtml(breadcumHtmlCollectionArray);

            const breadCumsList = []
            breadcumHtmlCollectionArray.map((v) => {
                const splitId = v.getAttribute('value').split("-")
                breadCumsList[breadCumsList.length] = { value: splitId[0], id: splitId[splitId.length - 1] }
            })
            setBreadcum(breadCumsList);

            if (breadCumsList.length > 0) {
                const lastOpenedAccordion = breadCumsList[breadCumsList.length - 1].id;
                const getLastOpenedButton = document.getElementById(lastOpenedAccordion);
                if (getLastOpenedButton) {
                    getLastOpenedButton.setAttribute('class', 'accordion-button border-bottom py-2 active')
                }
            }
        }, 500)
    }, [])


    const handleBreadCum = (breadCumValue, breadCumAccordinId) => {
        const breadCumIndex = breadcum.findIndex((v) => {
            return v.value === breadCumValue
        })

        if (breadCumIndex > 0) {
            const sliceBreadCum = breadcumHtml.slice(breadCumIndex)
            if (sliceBreadCum.length >= 0) {
                sliceBreadCum.map((v, i) => {
                    const buttonId = v.getAttribute("value")
                    const buttonIdSplit = buttonId.split('-')
                    const buttonData = document.getElementById(buttonIdSplit[1]);
                    if (buttonData) {
                        if (buttonData.getAttribute('aria-expanded')) {
                            buttonData.click()
                        }
                    }
                })

                setTimeout(() => {
                    const breadcumHtmlCollection = document.getElementsByClassName('show');
                    const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
                    setBreadcumHtml(breadcumHtmlCollectionArray);

                    const breadCumsList = []
                    breadcumHtmlCollectionArray.map((v) => {
                        const splitId = v.getAttribute('value').split("-")
                        breadCumsList[breadCumsList.length] = { value: splitId[0], id: splitId[splitId.length - 1] }
                    })
                    setBreadcum(breadCumsList);

                    breadCumsList.forEach((v, i) => {
                        const getLastOpenedButton = document.getElementById(v.id);
                        if (getLastOpenedButton) {
                            if (i === 0) {
                                getLastOpenedButton.setAttribute('class', 'accordion-button border-bottom accordion-button-one py-2')
                            }
                            else if (i === breadCumsList.length - 1) {
                                getLastOpenedButton.setAttribute('class', 'accordion-button border-bottom active py-2')
                            } else {
                                getLastOpenedButton.setAttribute('class', 'accordion-button border-bottom py-2')
                            }
                        }
                    });
                }, 500)
            }
        }
        else {
            const breadCumIndex = breadcumHtml.findIndex((v) => {
                return v.getAttribute("data-bs-parent") === breadCumAccordinId
            })
            if (breadCumIndex >= 0) {
                const sliceBreadCum = breadcumHtml.slice(breadCumIndex)

                if (sliceBreadCum.length >= 0) {
                    sliceBreadCum.map((v, i) => {
                        const buttonId = v.getAttribute("value")
                        const buttonIdSplit = buttonId.split('-')
                        const buttonData = document.getElementById(buttonIdSplit[1]);
                        if (buttonData) {
                            if (buttonData.getAttribute('aria-expanded')) {
                                buttonData.click()
                            }
                        }
                    })
                    setTimeout(() => {
                        const breadcumHtmlCollection = document.getElementsByClassName('show');
                        const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
                        setBreadcumHtml(breadcumHtmlCollectionArray);

                        const breadCumsList = []
                        breadcumHtmlCollectionArray.map((v) => {
                            const splitId = v.getAttribute('value').split("-")
                            breadCumsList[breadCumsList.length] = { value: splitId[0], id: splitId[splitId.length - 1] }
                        })
                        setBreadcum(breadCumsList);

                        breadCumsList.forEach((v, i) => {
                            const getLastOpenedButton = document.getElementById(v.id);
                            if (getLastOpenedButton) {
                                if (i === 0) {
                                    getLastOpenedButton.setAttribute('class', 'accordion-button accordion-button-one border-bottom py-2')
                                }
                                else if (i === breadCumsList.length - 1) {
                                    getLastOpenedButton.setAttribute('class', 'accordion-button border-bottom active py-2')
                                } else {
                                    getLastOpenedButton.setAttribute('class', 'accordion-button border-bottom py-2')
                                }
                            }
                        });
                    }, 500)
                }
            } else {
                setTimeout(() => {
                    const breadcumHtmlCollection = document.getElementsByClassName('show');
                    const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
                    setBreadcumHtml(breadcumHtmlCollectionArray);

                    const breadCumsList = []
                    breadcumHtmlCollectionArray.map((v) => {
                        const splitId = v.getAttribute('value').split("-")
                        breadCumsList[breadCumsList.length] = { value: splitId[0], id: splitId[splitId.length - 1] }
                    })
                    setBreadcum(breadCumsList);

                    breadCumsList.forEach((v, i) => {
                        const getLastOpenedButton = document.getElementById(v.id);
                        if (getLastOpenedButton) {
                            if (i === 0) {
                                getLastOpenedButton.setAttribute('class', 'accordion-button accordion-button-one border-bottom py-2')
                            }
                            else if (i === breadCumsList.length - 1) {
                                getLastOpenedButton.setAttribute('class', 'accordion-button border-bottom active py-2')
                            } else {
                                getLastOpenedButton.setAttribute('class', 'accordion-button border-bottom py-2')
                            }
                        }
                    });
                }, 500)
            }
        }
    }


    const createDynamicAccordion = (item, index) => {
        if (item.subFolder) {
            const uniqueAccordinId = item.id;

            return <div className="accordion" id={`accordion${uniqueAccordinId}`} key={uniqueAccordinId}>
                {item.subFolder.map((newitem, subindexIndex) => {

                    return <div className="accordion-item border-0 mb-0" key={newitem.id}>
                        <div className="accordion-header shadow-sm accordion-button-border-left" id={`heading${newitem.id}`}>
                            <button className={`accordion-button border-bottom py-2 ${subindexIndex === 0 ? "" : "collapsed"} `} type="button" onClick={() => { handleBreadCum(newitem.id, `#accordion${uniqueAccordinId}`) }} data-bs-toggle="collapse" data-bs-target={`#collapse${newitem.id}`} aria-expanded='false' aria-controls={`collapse${newitem.id}`} id={newitem.id}>
                                {newitem.folderName}
                            </button>
                        </div>
                        <div id={`collapse${newitem.id}`} className={`accordion-collapse collapse ${subindexIndex === 0 ? "show" : ""}`} aria-labelledby={`heading${newitem.id}`} data-bs-parent={`#accordion${uniqueAccordinId}`} value={`${newitem.folderName}-${newitem.id}`}>
                            <div className="accordion-body pt-0 pb-0 pe-0 ps-3">
                                {newitem ?
                                    createDynamicAccordion(newitem, subindexIndex + item.subFolder.length)
                                    :
                                    newitem.title}
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
        }
    }

    const handledisplayCreateFolder = (folderName, index, id) => {
        const checkButton = document.getElementById(id)
        if (checkButton) {
            const checkAiraExpanded = checkButton.getAttribute("aria-expanded");
            if (checkAiraExpanded == "true") {
                return <div className="d-flex flex-wrap">
                    <div className="col-10">
                        {/* <button type="button" className="btn btn-transparent border-0 text-light w-100 text-end" onClick={() => handleCreateFolder(index)}> */}
                        <button type="button" className="btn btn-transparent border-0 text-light w-100 text-end">
                            <span className="me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                                    <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                                    <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </span>
                            Create
                        </button>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-transparent border-0 text-light w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                        </button>
                    </div>
                </div>
            }
        }
    }

    const handleCreateFolder = (index) => {
        const checkLength = data[index]
        var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var ID_LENGTH = 8;
        var rtn = '';

        for (var i = 0; i < ID_LENGTH; i++) {
            rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
        }

        if (checkLength.subFolder) {
            const spreadCheckLength = { ...checkLength }

            spreadCheckLength.subFolder.push({ folderName: "untitled", id: rtn })

            const updateAfterFolderCreated = data.map((v, i) => {
                return i === index ? spreadCheckLength : v
            })
            setData(updateAfterFolderCreated)
        } else {
            const spreadCheckLength = { ...checkLength }
            const updateAfterFolderCreated = data.map((v, i) => {
                return i === index ? { ...v, subFolder: [{ folderName: "untitled", id: rtn }] } : v
            })

            setData(updateAfterFolderCreated)
        }
    }

    return (
        <div className="content-product-details-height w-100 overflowY">
            <div className="container pt-4 h-100">
                <div className="row h-100 ">
                    <div className="card col-12 col-md-5 h-100 hideScollbar overflowY border-0 rounded-4">
                        <div className="card-body">
                            <div className="accordion" id="accordionOne">
                                {
                                    data.map((item, index) => {
                                        return <div className="accordion-item border-0 mb-0" key={index}>
                                            <div className="accordion-header shadow-sm" id={`heading${item.id}`}>
                                                <div className={`accordion-button-one rounded d-flex flex-wrap align-items-center`}>
                                                    <div className="col-12">
                                                        <button className={`accordion-button accordion-button-one border-bottom fw-bold py-2 ${index === 0 ? "" : "collapsed"}`} type="button" onClick={() => { handleBreadCum(item.id, "#accordionOne") }} data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapse${item.id}`} id={item.id}>
                                                            {item.folderName}
                                                        </button>
                                                    </div>
                                                    {/* <div className="col-5">
                                                        {handledisplayCreateFolder(item.folderName, index, item.id)}
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionOne" value={`${item.folderName}-${item.id}`}>
                                                <div className="accordion-body p-0 ps-3 mb-0">
                                                    {item.subFolder ?
                                                        createDynamicAccordion(item, index)
                                                        :
                                                        item.title}
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-7 h-100">
                        {/* <div className="accordion-breadcum-height pb-2">
                            <div className="card h-100 border-0 rounded-3">
                                <div className="card-body h-100 hideScollbar overflowX">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb rounded-1">
                                            {breadcum.map((v, i) => {
                                                return <li key={i} className="breadcrumb-item" onClick={() => document.getElementById(v.id).click()}>
                                                    {v.value}
                                                </li>
                                            })}
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="accordion-breadcum-content-height"> */}

                        
                        <div className="card h-100 border-0 rounded-4 p-2">
                            <div className="card-body h-100">
                                <div className="col-12 d-flex flex-wrap align-items-center">
                                    <div className="col">
                                        <h6 className="fw-bold mb-0">Add Questions</h6>
                                    </div>
                                    <div className="col text-end pe-0">
                                        <button type="button" className="btn btn-primary py-1 px-3 button-font-size">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus me-2" viewBox="0 0 16 16">
                                                <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                                                <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                                            </svg>
                                            Add
                                        </button>
                                    </div>
                                </div>

                                <div className="col-12 px-1 py-3 ">
                                    <div className="card border-0 background-gray pt-3 pb-5 rounded-4 question-content-height overflowY">
                                        <div className="card-body paragraph-font-size">
                                            <div className="col-12 row align-items-center py-2">
                                                <div className="col-7">
                                                    <p className="text-gray ">1. Please tell us your budget</p>
                                                </div>
                                                <div className="col-4">
                                                    <input type="text" value="hi" className="border-1 border-gray py-2 px-2 rounded-1 w-100" />
                                                </div>
                                                <div className="col-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="col-12 row align-items-center py-2">
                                                <div className="col-7">
                                                    <p className="text-gray">2. Please tell us your budget</p>
                                                </div>
                                                <div className="col-4">
                                                    <select className="py-2 border-1 border-gray py-1 rounded-1 w-100" >
                                                        <option value="option 1">Option 1</option>
                                                        <option value="option 2">Option 2</option>
                                                        <option value="option 3">Option 3</option>
                                                        <option value="option 4">Option 4</option>
                                                        <option value="option 5">Option 5</option>
                                                    </select>
                                                </div>
                                                <div className="col-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="col-12 row align-items-center py-2">
                                                <div className="col-7">
                                                    <p className="text-gray">3. Please tell us your budget</p>
                                                </div>

                                                <div className="col-4">
                                                    <div className="row">
                                                        <div className="col">
                                                            <div class="form-check">
                                                                <input class="form-check-input cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                <label class="form-check-label cursor-pointer" for="flexRadioDefault1">
                                                                    Yes
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col ps-0">
                                                            <div class="form-check">
                                                                <input class="form-check-input cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                                <label class="form-check-label cursor-pointer" for="flexRadioDefault2">
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails