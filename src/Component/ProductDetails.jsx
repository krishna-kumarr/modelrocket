import { useEffect, useState } from "react";
import { Accordion, Card, Button } from 'react-bootstrap';

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
                                            id: 11114
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
                breadCumsList[breadCumsList.length] = { value: splitId[0], id: splitId[1] }
            })
            setBreadcum(breadCumsList);
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
                    const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
                    const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
                    setBreadcumHtml(breadcumHtmlCollectionArray);

                    const breadCumsList = []
                    breadcumHtmlCollectionArray.map((v) => {
                        const splitId = v.getAttribute('value').split("-")
                        breadCumsList[breadCumsList.length] = { value: splitId[0], id: splitId[1] }
                    })
                    setBreadcum(breadCumsList);
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
                        const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
                        const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
                        setBreadcumHtml(breadcumHtmlCollectionArray);

                        const breadCumsList = []
                        breadcumHtmlCollectionArray.map((v) => {
                            const splitId = v.getAttribute('value').split("-")
                            breadCumsList[breadCumsList.length] = { value: splitId[0], id: splitId[1] }
                        })
                        setBreadcum(breadCumsList);
                    }, 500)
                }
            } else {
                setTimeout(() => {
                    const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
                    const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
                    setBreadcumHtml(breadcumHtmlCollectionArray);

                    const breadCumsList = []
                    breadcumHtmlCollectionArray.map((v) => {
                        const splitId = v.getAttribute('value').split("-")
                        breadCumsList[breadCumsList.length] = { value: splitId[0], id: splitId[1] }
                    })
                    setBreadcum(breadCumsList);
                }, 500)
            }
        }
    }


    const createDynamicAccordion = (item, index) => {
        if (item.subFolder) {
            const uniqueAccordinId = item.id;

            const randomHexColor = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`;

            return <div className="accordion" id={`accordion${uniqueAccordinId}`} key={uniqueAccordinId}>
                {item.subFolder.map((newitem, subindexIndex) => {

                    return <div className="accordion-item border-0" key={newitem.id}>
                        <h5 className="accordion-header shadow-sm" id={`heading${newitem.id}`}>
                            <button className={`accordion-button border-bottom py-2 ${subindexIndex === 0 ? "" : "collapsed"} `} style={{ borderLeft: `4px solid ${randomHexColor}` }} type="button" onClick={() => { handleBreadCum(newitem.id, `#accordion${uniqueAccordinId}`) }} data-bs-toggle="collapse" data-bs-target={`#collapse${newitem.id}`} aria-expanded='false' aria-controls={`collapse${newitem.id}`} id={newitem.id}>
                                {newitem.folderName}
                            </button>
                        </h5>
                        <div id={`collapse${newitem.id}`} className={`accordion-collapse collapse ${subindexIndex === 0 ? "show" : ""}`} aria-labelledby={`heading${newitem.id}`} data-bs-parent={`#accordion${uniqueAccordinId}`} value={`${newitem.folderName}-${newitem.id}`}>
                            <div className="accordion-body py-2 pe-0 ps-3">
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
                        <button type="button" className="btn btn-transparent border-0 text-light w-100 text-end" onClick={() => handleCreateFolder(index)}>
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
            console.log(updateAfterFolderCreated, "one")
            setData(updateAfterFolderCreated)
        } else {
            const spreadCheckLength = { ...checkLength }
            const updateAfterFolderCreated = data.map((v, i) => {
                return i === index ? { ...v, subFolder: [{ folderName: "untitled", id: rtn }] } : v
            })
            console.log(updateAfterFolderCreated, "two")

            setData(updateAfterFolderCreated)
        }
    }

    return (
        <div className="content-breadcrumps-below-content-height w-100 overflowY">
            <div className="container pt-5 h-100">
                <div className="row h-100 ">
                    <div className="card col-12 col-md-6 h-100 hideScollbar overflowY border-0 rounded-4">
                        <div className="card-body">

                            <div className="accordion" id="accordionOne">
                                {
                                    data.map((item, index) => {
                                        return <div className="accordion-item border-0" key={index}>
                                            <h5 className="accordion-header shadow-sm" id={`heading${item.id}`}>
                                                <div className={`accordion-button-one rounded d-flex flex-wrap align-items-center`}>
                                                    <div className="col-7">
                                                        <button className={`accordion-button accordion-button-one border-bottom py-2 ${index === 0 ? "" : "collapsed"}`} type="button" onClick={() => { handleBreadCum(item.id, "#accordionOne") }} data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapse${item.id}`} id={item.id}>
                                                            {item.folderName}
                                                        </button>
                                                    </div>
                                                    <div className="col-5">
                                                        {handledisplayCreateFolder(item.folderName, index, item.id)}
                                                    </div>
                                                </div>
                                            </h5>
                                            <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionOne" value={`${item.folderName}-${item.id}`}>
                                                <div className="accordion-body p-0 py-1 ps-3">
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

                    <div className="col-12 col-md-6">
                        <ul>
                            {breadcum.map((v, i) => {
                                return <li key={i} onClick={() => document.getElementById(v.id).click()}>
                                    {v.value}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails