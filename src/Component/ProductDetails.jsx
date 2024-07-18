import { useEffect, useState } from "react";
import { one } from "../Component/assets/one.png";
import { two } from "../Component/assets/two.png";


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


    // question modal box 
    const [qestionDialogAddOptions, setQuestionDialogAddOptions] = useState(false);
    const [option, setOption] = useState('');
    const [questionArray, setQuestionArray] = useState([]);
    const [questionModalError, setQuestionModalError] = useState(false);
    const [questionEditIndex, setQuestionEditIndex] = useState(-1);
    const [questionEdit, setQuestionEdit] = useState(false)
    const [newQuestion, setNewQuestion] = useState({
        question: '',
        questionType: '',
        options: [],
        tooltip: ''
    })


    //attribute modal box
    const [attributesArray, setAttributesArray] = useState([]);
    const [attributesArrayModal, setAttributesArrayModal] = useState([]);
    const [attributeAddOptions, setAttributeAddOptions] = useState(false);
    const [attribute, setAttribute] = useState('');



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

    const handleAddOptions = () => {
        if (option !== '') {
            setQuestionDialogAddOptions(false);

            const newOption = { ...newQuestion }
            const alterOptions = newOption.options
            alterOptions[alterOptions.length] = option
            newOption.options = alterOptions

            setNewQuestion({ ...newQuestion, options: newOption.options })
        }
    }

    const handleDeleteOption = (deletionIndex) => {
        const newOption = { ...newQuestion }
        const filterOptions = newOption.options.filter((opt, ind) => {
            return ind !== deletionIndex
        })

        setNewQuestion({ ...newQuestion, options: filterOptions })
    }

    const handleSaveQuestion = () => {
        if (newQuestion.question === '') {
            setQuestionModalError(true);
        }
        else if (newQuestion.tooltip === '') {
            setQuestionModalError(true);
        }
        else if (newQuestion.questionType !== 'Short answer' && newQuestion.options.length === 0) {
            setQuestionModalError(true);
        }
        else {
            setQuestionModalError(false);

            const addNewQuestionList = [...questionArray];
            addNewQuestionList[addNewQuestionList.length] = newQuestion;
            setQuestionArray(addNewQuestionList);

            document.getElementById('closeQuestionModel').click();
        }
    }

    const handleDynamicQuestionType = (questionType, options) => {
        switch (questionType) {
            case "Short answer":
                return <input type="text" value={options} className="border-1 border-gray py-2 px-2 rounded-1 w-100" />
            case "Checkbox":
                return <div className="row px-3">
                    {
                        options.map((val, ind) => {
                            return <div class="form-check mb-0 col-6" key={ind}>
                                <input class="form-check-input cursor-pointer" type="checkbox" value={val} id={`flexCheck${ind}`} />
                                <label class="form-check-label w-100 cursor-pointer" for={`flexCheck${ind}`}>
                                    {val}
                                </label>
                            </div>
                        })
                    }
                </div>
            case "Dropdown":
                return <select className="py-2 border-1 border-gray py-1 rounded-1 w-100" >
                    {
                        options.map((val, ind) => {
                            return <option value={val}>{val}</option>
                        })
                    }
                </select>
            case "Radial option":
                return <div className="row">
                    {
                        options.map((val, ind) => {
                            return <div className="col-6" key={ind}>
                                <div class="form-check">
                                    <input class="form-check-input cursor-pointer" type="radio" name="flexRadioDefault" id={`flexRadioDefault1-${val}`} />
                                    <label class="form-check-label cursor-pointer" for={`flexRadioDefault1-${val}`}>
                                        {val}
                                    </label>
                                </div>
                            </div>
                        })
                    }
                </div>
            default:
                break;
        }
    }

    const handleOpenQuestionModel = () => {
        setQuestionModalError(false);

        setNewQuestion({
            question: '',
            questionType: '',
            options: [],
            tooltip: ''
        })
    }

    const handleSelectBox = (e) => {
        if (e.target.value === 'Short answer') {
            setNewQuestion({ ...newQuestion, questionType: e.target.value, options: '' });
        }
        else {
            setNewQuestion({ ...newQuestion, questionType: e.target.value, options: [] });
        }
    }

    const handleQuestionModelEdit = (value, index) => {
        setQuestionEdit(true);
        setQuestionEditIndex(index)
        setNewQuestion({
            question: value.question,
            questionType: value.questionType,
            options: value.options,
            tooltip: value.tooltip
        });

        setTimeout(() => {
            document.getElementById('questionModelBox').click();
        }, 10)
    }

    const handleUpdateEditQuestion = () => {
        if (newQuestion.question === '') {
            setQuestionModalError(true);
        }
        else if (newQuestion.tooltip === '') {
            setQuestionModalError(true);
        }
        else if (newQuestion.questionType !== 'Short answer' && newQuestion.options.length === 0) {
            setQuestionModalError(true);
        }
        else {
            setQuestionModalError(false);

            setQuestionEdit(false);
            const updateQuestionList = questionArray.map((v, i) => {
                return i === questionEditIndex ? newQuestion : v
            })

            setQuestionArray(updateQuestionList);
            document.getElementById('closeQuestionModel').click();
        }
    }


    const handleAddAttribute = () => {
        if (attribute !== '') {
            setAttributeAddOptions(false);

            const newAttributes = [...attributesArrayModal]
            newAttributes[newAttributes.length] = attribute

            setAttributesArrayModal(newAttributes)
        }
    }

    const handleDeleteAttribute = (index) => {
        const deletedAttribute = attributesArrayModal.filter((v, i) => {
            return i !== index
        })

        setAttributesArrayModal(deletedAttribute)
    }

    const handleSaveAttributesModal = () => {
        setAttributesArray(attributesArrayModal);
        document.getElementById('closeAttributeModel').click()
    }

    return (
        <>
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
                            <div className="card h-100 border-0 rounded-4 p-2">
                                <div className="card-body h-100 paragraph-font-size hideScollbar overflowY">
                                    {/* Add Questions */}
                                    <div className="col-12 pb-4">
                                        <div className="col-12 d-flex flex-wrap align-items-center">
                                            <div className="col">
                                                <h6 className="fw-bold mb-0">Add Questions</h6>
                                            </div>
                                            <div className="col text-end pe-0">
                                                <button type="button" className="btn btn-primary py-1 px-3 button-font-size rounded-1" data-bs-toggle="modal" data-bs-target="#questionModel" id='questionModelBox' onClick={questionEdit ? null : handleOpenQuestionModel}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus me-2" viewBox="0 0 16 16">
                                                        <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                                                        <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                    Add
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-12 px-1 py-3 ">
                                            <div className={`card border-0 background-gray pt-3 ${questionArray.length > 0 ? 'pb-5' : 'pb-0'} rounded-4 question-content-height overflowY`}>
                                                <div className="card-body">
                                                    {
                                                        questionArray.length > 0 ?
                                                            questionArray.map((value, index) => {
                                                                return <div className="col-12 row align-items-center py-2" key={index}>
                                                                    <div className="col-7">
                                                                        <p className="text-gray ">{index + 1}. {value.question}</p>
                                                                    </div>
                                                                    <div className="col-4">
                                                                        {handleDynamicQuestionType(value.questionType, value.options)}
                                                                    </div>
                                                                    <div className="col-1 cursor-pointer" onClick={() => handleQuestionModelEdit(value, index)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            })
                                                            :
                                                            <div className="row justify-content-center text-center">
                                                                <img src={require('../Component/assets/two.png')} className="product-details-no-data-img" />
                                                                <h6 className="pt-3">Start by adding a question</h6>
                                                                <p>Click on the button at the top to add a new question</p>
                                                            </div>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Add Attribute */}
                                    <div className="col-12 pb-4">
                                        <div className="col-12 d-flex flex-wrap align-items-center">
                                            <div className="col">
                                                <h6 className="fw-bold mb-0">Add Attribute</h6>
                                            </div>
                                            <div className="col text-end pe-0">
                                                <button type="button" className="btn btn-primary py-1 px-3 button-font-size rounded-1" data-bs-toggle="modal" data-bs-target="#attributeModel" id='attributeModelBox'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-plus me-2" viewBox="0 0 16 16">
                                                        <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z" />
                                                        <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                    Add & Edit
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-12 px-1 py-3">
                                            <div className="card border-0 background-gray pt-4 px-5 rounded-4 attribute-content-height overflowY">
                                                <div className="card-body paragraph-font-size">
                                                    {
                                                        attributesArray.length > 0 ?
                                                            <div className="row gy-3">
                                                                {attributesArray.map((attributes, attributeIndex) => {
                                                                    return <div className="col-6" key={attributeIndex}>
                                                                        <input type="text" value={attributes} className="border-0 py-2 px-2 rounded-1 w-100" />
                                                                    </div>
                                                                })}
                                                            </div>
                                                            :
                                                            <div className="row justify-content-center text-center">
                                                                <img src={require('../Component/assets/two.png')} className="product-details-no-data-img" />
                                                                <h6 className="pt-3">Start by adding a question</h6>
                                                                <p>Click on the button at the top to add a new question</p>
                                                            </div>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add question modal  */}
            <div class="modal fade" id="questionModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-md">
                    <div class="modal-content paragraph-font-size px-4 py-2">
                        <div class="modal-header border-0">
                            <h5 class="modal-title fw-bold" id="staticBackdropLabel">Add Question</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeQuestionModel" onClick={() => setQuestionEdit(false)}></button>
                        </div>
                        <div class="modal-body">
                            <div className="py-3 row align-items-start">
                                <div className="col-8">
                                    <input type="text" className={`form-control rounded-0 border-0 border-bottom ${questionModalError && newQuestion.question === '' ? "border-danger" : "border-dark"}`} value={newQuestion.question} onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })} />
                                </div>
                                <div className="col-4">
                                    <select className={`${questionModalError && newQuestion.questionType === '' ? "border-danger" : "border-gray"} form-select selecctBox-font-size py-1 border-1 py-1 rounded-1 w-100`} value={newQuestion.questionType} onChange={(e) => handleSelectBox(e)}>
                                        <option value="">Select</option>
                                        <option value="Dropdown">Dropdown</option>
                                        <option value="Checkbox">Checkbox</option>
                                        <option value="Short answer">Short answer</option>
                                        <option value="Radial option">Radial option</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-3 ps-0">
                                {
                                    newQuestion.questionType !== '' && newQuestion.questionType !== 'Short answer' ?
                                        newQuestion.options.map((v, i) => {
                                            return <div className="row pb-1 align-items-center" key={i}>
                                                <div className="col-9">
                                                    {i + 1}.{v}
                                                </div>
                                                <div className="col-3">
                                                    <button type="button" className="btn text-danger" onClick={() => handleDeleteOption(i)}>Delete</button>
                                                </div>
                                            </div>
                                        })
                                        :
                                        null
                                }

                                {
                                    qestionDialogAddOptions ?
                                        <div className="col-12 row ">
                                            <div className="col-11">
                                                <input type="text" className="form-control rounded-0 border-0 border-bottom border-dark w-100" onChange={(e) => setOption(e.target.value)} />
                                            </div>
                                            <div className="col-1">
                                                <button type="button" class="btn rounded-1" onClick={() => handleAddOptions()}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                                        <path d="M11 2H9v3h2z" />
                                                        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            {
                                                newQuestion.questionType !== '' && newQuestion.questionType !== 'Short answer' ?
                                                    <>
                                                        {questionModalError && newQuestion.options.length === 0 ? <p className="text-danger pt-3">Options required</p> : null}

                                                        <p className="text-decoration-underline cursor-pointer pt-1" onClick={() => {
                                                            setOption('')
                                                            setQuestionDialogAddOptions(true)
                                                        }}>Click here to add Options</p>
                                                    </>
                                                    :
                                                    null
                                            }
                                        </div>
                                }
                            </div>

                            <div class="pt-3">
                                <label for="questionTooltipInput" class="form-label">Tooltip</label>
                                <input type="text" class={`form-control ${questionModalError && newQuestion.tooltip === '' ? "border-danger" : "border-gray"}`} id="questionTooltipInput" value={newQuestion.tooltip} onChange={(e) => setNewQuestion({ ...newQuestion, tooltip: e.target.value })} />
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            {
                                questionEdit ?
                                    <button type="button" class="btn btn-primary rounded-1" onClick={handleUpdateEditQuestion}>Update</button>
                                    :
                                    <button type="button" class="btn btn-primary rounded-1" onClick={handleSaveQuestion}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Attribute modal  */}
            <div class="modal fade" id="attributeModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-md">
                    <div class="modal-content paragraph-font-size px-4 py-2">
                        <div class="modal-header border-0">
                            <h5 class="modal-title fw-bold" id="staticBackdropLabel">Add & Edit Attribute</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeAttributeModel"></button>
                        </div>
                        <div class="modal-body my-3 mb-5">
                            <div>
                                {
                                    attributesArrayModal.map((v, i) => {
                                        return <div className="row pb-1 align-items-center" key={i}>
                                            <div className="col-9">
                                                {i + 1}.{v}
                                            </div>
                                            <div className="col-3">
                                                <button type="button" className="btn text-danger" onClick={() => handleDeleteAttribute(i)}>Delete</button>
                                            </div>
                                        </div>
                                    })
                                }

                                {
                                    attributeAddOptions ?
                                        <div className="col-12 row ">
                                            <div className="col-11">
                                                <input type="text" className="form-control rounded-0 border-0 border-bottom border-dark w-100" onChange={(e) => setAttribute(e.target.value)} />
                                            </div>
                                            <div className="col-1">
                                                <button type="button" class="btn rounded-1" onClick={() => handleAddAttribute()}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy" viewBox="0 0 16 16">
                                                        <path d="M11 2H9v3h2z" />
                                                        <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        :
                                        attributesArrayModal.length < 4 ?
                                            <div>
                                                <p className="text-decoration-underline cursor-pointer pt-1" onClick={() => {
                                                    setAttribute('')
                                                    setAttributeAddOptions(true)
                                                }}>Click here to add Attributes</p>
                                            </div>
                                            :
                                            null
                                }
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            {
                                questionEdit ?
                                    <button type="button" class="btn btn-primary rounded-1" onClick={handleSaveAttributesModal}>Update</button>
                                    :
                                    <button type="button" class="btn btn-primary rounded-1" onClick={handleSaveAttributesModal}>Save</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails