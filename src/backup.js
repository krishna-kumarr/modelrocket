import { useEffect, useState } from "react";

const App = () => {
  const [breadcumHtml, setBreadcumHtml] = useState([]);
  const [breadcum, setBreadcum] = useState([]);
  const [updateBreadcum, setupdateBreadcum] = useState(false);
  const [clickedBreadCum, setClickedBreadCum] = useState('');


  const data = [
    {
      folderName: "suv", subFolder: [
        {
          folderName: "rav4",
          subFolder: [
            {
              folderName: "rav4 le", subFolder: [
                {
                  folderName: "sub folder",

                },
                {
                  folderName: "sub folder",

                },
                {
                  folderName: "sub folder",

                }
              ], content: "Lorem ipsum dolor sit amet."
            }
          ]
        },
        {
          folderName: "highlander",
        },
        {
          folderName: "4runner",

        }
      ]
    },
    {
      folderName: "sedan",
    }, {
      folderName: "truck",
    }, {
      folderName: "hybrid/electric",
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
      const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
      setBreadcumHtml(breadcumHtmlCollectionArray);

      const breadCumsList = []
      breadcumHtmlCollectionArray.map((v) => {
        breadCumsList[breadCumsList.length] = v.getAttribute('value')
      })
      setBreadcum(breadCumsList);
    }, 500)
  }, [])

  const handleBreadCum = (breadCumValue) => {
    const breadCumIndex = breadcum.findIndex((v) => {
      return v === breadCumValue
    })
    
 
    if (breadCumIndex > 0) {
      const sliceBreadCum = breadcumHtml.slice(breadCumIndex)
      if (sliceBreadCum.length > 0) {
        sliceBreadCum.map((v, i) => { 
            const buttonId = v.getAttribute("value")
            const buttonData = document.getElementById(buttonId)
            if (buttonData.getAttribute('aria-expanded')) {
              buttonData.click()
            } 
        })

        setTimeout(() => {
          const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
          const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
          setBreadcumHtml(breadcumHtmlCollectionArray);

          const breadCumsList = []
          breadcumHtmlCollectionArray.map((v) => {
            breadCumsList[breadCumsList.length] = v.getAttribute('value')
          })
          setBreadcum(breadCumsList);
        }, 500)
      }
    }else{
      setTimeout(() => {
        const breadcumHtmlCollection = document.getElementsByClassName('accordion-collapse collapse show');
        const breadcumHtmlCollectionArray = Array.prototype.slice.call(breadcumHtmlCollection);
        setBreadcumHtml(breadcumHtmlCollectionArray);

        const breadCumsList = []
        breadcumHtmlCollectionArray.map((v) => {
          breadCumsList[breadCumsList.length] = v.getAttribute('value')
        })
        setBreadcum(breadCumsList);
      }, 500)
    }
  }


  const createNewAccordion = (item, index) => {
    if (item.subFolder) {
      const uniqueAccordinId = index

      return <div className="accordion" id={`accordion${uniqueAccordinId}`}>
        {item.subFolder.map((newitem, subindexIndex) => {
          const uniqueID = `${subindexIndex}${index}`

          return <div className="accordion-item border-0 mb-1">
            <h2 className="accordion-header" id={`heading${uniqueID}`}>
              <button className="accordion-button p-2 border" type="button" data-bs-toggle="collapse" onClick={() => {
                handleBreadCum(newitem.folderName.trim())
              }}
                data-bs-target={`#collapse${uniqueID}`} aria-expanded='false' aria-controls={`collapse${uniqueID}`} id={newitem.folderName.trim()}>
                {newitem.folderName}
              </button>
            </h2>
            <div id={`collapse${uniqueID}`} className={`accordion-collapse collapse ${subindexIndex === 0 ? "show" : ""}`} aria-labelledby={`heading${uniqueID}`} data-bs-parent={`#accordion${uniqueAccordinId}`} value={newitem.folderName}>
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
            return <div className="accordion-item border-0 mb-1">
              <h2 className="accordion-header" id={`heading${index + 1}`}>
                <button className="accordion-button p-2 border" type="button" data-bs-toggle="collapse" onClick={() => {
                  handleBreadCum(item.folderName.trim())
                }}
                  data-bs-target={`#collapse${index}`} aria-expanded={index === 0 ? "true" : 'false'} aria-controls={`collapse${index}`} id={item.folderName.trim()}>
                  {item.folderName}
                </button>
              </h2>
              <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} onClick={() => setupdateBreadcum(!updateBreadcum)} aria-labelledby={`heading${index}`} data-bs-parent="#accordionOne" value={item.folderName}>
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
            return <li>{v}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;