import { useEffect, useState } from "react";

const App = () => {
  const [breadcumHtml, setBreadcumHtml] = useState([]);
  const [breadcum, setBreadcum] = useState([]);

  const data = [
    {
      folderName: "suv", id: 1, subFolder: [
        {
          folderName: "rav4",
          id: 11,
          subFolder: [
            {
              folderName: "rav4 le", id: 111, subFolder: [
                {
                  folderName: "rav4 le one",
                  id: 1111
                },
                {
                  folderName: "rav4 le two",
                  id: 1112
                },
                {
                  folderName: "rav4 le three",
                  id: 1113
                }
              ]
            }
          ]
        },
        {
          folderName: "highlander", id: 12
        },
        {
          folderName: "4runner", id: 13
        }
      ]
    },
    {
      folderName: "sedan", id: 2
    }, {
      folderName: "truck", id: 3
    }, {
      folderName: "hybrid/electric", id: 4, subFolder: [
        {
          folderName: "rav4",
          id: 41,
          subFolder: [
            {
              folderName: "rav4 le", id: 411, subFolder: [
                {
                  folderName: "rav4 le one",
                  id: 4111
                },
                {
                  folderName: "rav4 le two",
                  id: 4112
                },
                {
                  folderName: "rav4 le three",
                  id: 4113
                }
              ]
            }
          ]
        },
        {
          folderName: "highlander", id: 42
        },
        {
          folderName: "4runner", id: 43
        }
      ]
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
      const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
      setBreadcumHtml(breadcumHtmlCollectionArray);

      console.log(breadcumHtmlCollectionArray)

      const breadCumsList = []
      breadcumHtmlCollectionArray.map((v) => {
        const splitId = v.getAttribute('id').split("-")[1]
        breadCumsList[breadCumsList.length] = { value: v.getAttribute('value'), id: splitId }
      })
      setBreadcum(breadCumsList);
    }, 500)
  }, [])



  const handleBreadCum = (breadCumValue, breadCumAccordinId) => {
    const breadCumIndex = breadcum.findIndex((v) => {
      return v.value === breadCumValue
    })

    console.log(breadCumIndex)
    if (breadCumIndex > 0) {
      const sliceBreadCum = breadcumHtml.slice(breadCumIndex)
      if (sliceBreadCum.length >= 0) {
        sliceBreadCum.map((v, i) => {
          const buttonId = v.getAttribute("value")
          const buttonData = document.getElementById(buttonId)
          if (buttonData.getAttribute('aria-expanded')) {
            buttonData.click();
          }
        })

        setTimeout(() => {
          const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
          const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
          setBreadcumHtml(breadcumHtmlCollectionArray);

          const breadCumsList = []
          breadcumHtmlCollectionArray.map((v) => {
            const splitId = v.getAttribute('id').split("-")[1]
            breadCumsList[breadCumsList.length] = { value: v.getAttribute('value'), id: splitId }
          })
          setBreadcum(breadCumsList);
        }, 500)
      }
    }
    // else {
    //   const breadCumIndex = breadcumHtml.findIndex((v) => {
    //     return v.getAttribute("data-bs-parent") === breadCumAccordinId
    //   }) 

    //   if (breadCumIndex >= 0) {
    //     const sliceBreadCum = breadcumHtml.slice(breadCumIndex)

    //     if (sliceBreadCum.length >= 0) {
    //       sliceBreadCum.map((v, i) => {
    //         const buttonId = v.getAttribute("value")
    //         const buttonData = document.getElementById(buttonId)
    //         if (buttonData.getAttribute('aria-expanded')) {
    //           buttonData.click()
    //         }
    //       })
    //       setTimeout(() => {
    //         const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
    //         const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
    //         setBreadcumHtml(breadcumHtmlCollectionArray);

    //         const breadCumsList = []
    //         breadcumHtmlCollectionArray.map((v) => {
    // const splitId= v.getAttribute('id').split("-")[1]
    //           breadCumsList[breadCumsList.length] = {value: v.getAttribute('value'),id: splitId}
    //         })
    //         setBreadcum(breadCumsList);
    //       }, 500)
    //     }
    //   }else{
    //     setTimeout(() => {
    //       const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
    //       const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
    //       setBreadcumHtml(breadcumHtmlCollectionArray);

    //       const breadCumsList = []
    //       breadcumHtmlCollectionArray.map((v) => {
    // const splitId= v.getAttribute('id').split("-")[1]
    //         breadCumsList[breadCumsList.length] = {value: v.getAttribute('value'),id:splitId}
    //       })
    //       setBreadcum(breadCumsList);
    //     }, 500)
    //   }
    // }
  }


  const createNewAccordion = (item, index) => {
    if (item.subFolder) {
      const uniqueAccordinId = index

      return <div className="accordion" id={`accordion-${uniqueAccordinId}`} key={uniqueAccordinId}>
        {item.subFolder.map((newitem, subindexIndex) => {
          const uniqueID = `${subindexIndex}${index}`

          return <div className="accordion-item border-0 mb-1" key={newitem.id}>
            <h2 className="accordion-header" id={`heading${newitem.id}`}>
              <button className="accordion-button p-2 border" type="button" data-bs-toggle="collapse" onClick={() => {
                handleBreadCum(newitem.folderName.trim(), `#accordion-${uniqueAccordinId}`)
              }}
                data-bs-target={`#collapse-${newitem.id}`} aria-expanded='false' aria-controls={`collapse-${newitem.id}`} >
                {newitem.folderName}
              </button>
            </h2>
            <div id={`collapse-${newitem.id}`} className={`accordion-collapse collapse`} aria-labelledby={`heading${newitem.id}`} data-bs-parent={`#accordion-${uniqueAccordinId}`} value={newitem.folderName}>
              <div className="accordion-body pe-1 ps-3">
                {newitem ?
                  createNewAccordion(newitem, subindexIndex + item.subFolder.length)
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


  return (
    <div className="d-flex flex-wrap">
      <div className="accordion w-50 p-2" id="accordionOne">
        {
          data.map((item, index) => {
            return <div className="accordion-item border-0 mb-1" key={index}>
              <h2 className="accordion-header" id={`heading${item.id}`}>
                <button className="accordion-button p-2 border" type="button" data-bs-toggle="collapse" onClick={() => {
                  handleBreadCum(item.folderName.trim(),"#accordionOne")
                }}
                  data-bs-target={`#collapse-${item.id}`} aria-expanded={index === 0 ? "true" : 'false'} aria-controls={`collapse-${item.id}`} id={item.folderName.trim()}>
                  {item.folderName}
                </button>
              </h2>
              <div id={`collapse-${item.id}`} className={`accordion-collapse collapse ${index===0 ? "show" : ""}`} aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionOne" value={item.folderName}>
                <div className="accordion-body pe-1 ps-3">
                  {item.subFolder ?
                    createNewAccordion(item, index)
                    :
                    item.title}
                </div>
              </div>
            </div>
          })
        }

      </div>

      <div className="w-50">
        <ul>
          {breadcum.map((v, i) => {
            return <li key={i}>
              {v.value}
            </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;