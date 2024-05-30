"use client";
import Link from "next/link";
import  "../style.css";


function SignUp() {

  
  return (
    <>
    <div className="container signup"  >
      <div className="header">
          <h1>Sign Up</h1>
        </div>
        <div className="main">
         <form className="form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" >Sign Up</button>
            <Link href="/login" className="link">or login</Link>
        </form>
      </div>
    </div>
    <div className="footer signup">
        <svg id="visual" viewBox="0 0 1920 540" width="1920" height="540" xmlns="http://www.w3.org/2000/svg"  version="1.1"><path d="M0 370L45.7 371.8C91.3 373.7 182.7 377.3 274.2 375.2C365.7 373 457.3 365 548.8 356.5C640.3 348 731.7 339 823 333.8C914.3 328.7 1005.7 327.3 1097 331.3C1188.3 335.3 1279.7 344.7 1371.2 355.3C1462.7 366 1554.3 378 1645.8 375.5C1737.3 373 1828.7 356 1874.3 347.5L1920 339L1920 541L1874.3 541C1828.7 541 1737.3 541 1645.8 541C1554.3 541 1462.7 541 1371.2 541C1279.7 541 1188.3 541 1097 541C1005.7 541 914.3 541 823 541C731.7 541 640.3 541 548.8 541C457.3 541 365.7 541 274.2 541C182.7 541 91.3 541 45.7 541L0 541Z" fill="#157eab"></path><path d="M0 372L45.7 371.3C91.3 370.7 182.7 369.3 274.2 377.5C365.7 385.7 457.3 403.3 548.8 412.7C640.3 422 731.7 423 823 416.7C914.3 410.3 1005.7 396.7 1097 391.2C1188.3 385.7 1279.7 388.3 1371.2 393.8C1462.7 399.3 1554.3 407.7 1645.8 406.7C1737.3 405.7 1828.7 395.3 1874.3 390.2L1920 385L1920 541L1874.3 541C1828.7 541 1737.3 541 1645.8 541C1554.3 541 1462.7 541 1371.2 541C1279.7 541 1188.3 541 1097 541C1005.7 541 914.3 541 823 541C731.7 541 640.3 541 548.8 541C457.3 541 365.7 541 274.2 541C182.7 541 91.3 541 45.7 541L0 541Z" fill="#4e9bbb"></path><path d="M0 444L45.7 445.5C91.3 447 182.7 450 274.2 443C365.7 436 457.3 419 548.8 409C640.3 399 731.7 396 823 398.7C914.3 401.3 1005.7 409.7 1097 411.5C1188.3 413.3 1279.7 408.7 1371.2 414.2C1462.7 419.7 1554.3 435.3 1645.8 435.2C1737.3 435 1828.7 419 1874.3 411L1920 403L1920 541L1874.3 541C1828.7 541 1737.3 541 1645.8 541C1554.3 541 1462.7 541 1371.2 541C1279.7 541 1188.3 541 1097 541C1005.7 541 914.3 541 823 541C731.7 541 640.3 541 548.8 541C457.3 541 365.7 541 274.2 541C182.7 541 91.3 541 45.7 541L0 541Z" fill="#7bb8cc"></path><path d="M0 443L45.7 448C91.3 453 182.7 463 274.2 470.2C365.7 477.3 457.3 481.7 548.8 483.5C640.3 485.3 731.7 484.7 823 477.7C914.3 470.7 1005.7 457.3 1097 456.5C1188.3 455.7 1279.7 467.3 1371.2 472.8C1462.7 478.3 1554.3 477.7 1645.8 473.7C1737.3 469.7 1828.7 462.3 1874.3 458.7L1920 455L1920 541L1874.3 541C1828.7 541 1737.3 541 1645.8 541C1554.3 541 1462.7 541 1371.2 541C1279.7 541 1188.3 541 1097 541C1005.7 541 914.3 541 823 541C731.7 541 640.3 541 548.8 541C457.3 541 365.7 541 274.2 541C182.7 541 91.3 541 45.7 541L0 541Z" fill="#a7d5df"></path><path d="M0 473L45.7 475.8C91.3 478.7 182.7 484.3 274.2 486.8C365.7 489.3 457.3 488.7 548.8 492.3C640.3 496 731.7 504 823 504C914.3 504 1005.7 496 1097 493.8C1188.3 491.7 1279.7 495.3 1371.2 499.5C1462.7 503.7 1554.3 508.3 1645.8 509C1737.3 509.7 1828.7 506.3 1874.3 504.7L1920 503L1920 541L1874.3 541C1828.7 541 1737.3 541 1645.8 541C1554.3 541 1462.7 541 1371.2 541C1279.7 541 1188.3 541 1097 541C1005.7 541 914.3 541 823 541C731.7 541 640.3 541 548.8 541C457.3 541 365.7 541 274.2 541C182.7 541 91.3 541 45.7 541L0 541Z" fill="#d4f1f4"></path></svg>
      </div>
    </>
  );
}

export default SignUp;