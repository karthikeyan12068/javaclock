setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrRotation=30*(htime)+mtime/2;
    minRotation=6*mtime;
    secRotation=6*stime;
    hour.style.transform=`rotate(${hrRotation}deg)`;
    minute.style.transform=`rotate(${minRotation}deg)`;
    second.style.transform=`rotate(${secRotation}deg)`;
},1000);