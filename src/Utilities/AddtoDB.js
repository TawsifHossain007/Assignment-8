const getStoredApps = () => {

    const storedAppsSTR = localStorage.getItem("appList")

    if(storedAppsSTR)
    {
        const storedAppData = JSON.parse(storedAppsSTR)
        return storedAppData
    }
    else{
        return []
    }
}

const AddtoStoredDB = (id) => {

    const storedAppData = getStoredApps()

    storedAppData.push(id);
    const data = JSON.stringify(storedAppData)
    localStorage.setItem("appList",data)
}

const removeFromDB = (id) => {
  const storedApps = getStoredApps()

  const updatedApps = storedApps.filter(appId => appId !== id);
  const data =  JSON.stringify(updatedApps)
  localStorage.setItem("appList",data);
};

export {AddtoStoredDB,getStoredApps,removeFromDB}