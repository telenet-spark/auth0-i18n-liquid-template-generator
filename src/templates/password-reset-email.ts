import { localizeMessage } from "../scripts";

const html = `
<table style="background-color: #12292F; border: none; width: 100%;" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td>
                <div
                    style="border: none; box-sizing: border-box; max-width: 640px; overflow: hidden; width: 100%; margin: 20px auto; padding: 0px 20px;">
                    <span class="font" style="font-family:verdana, sans-serif"><img src="https://uploads-ssl.webflow.com/659e550456aad682f3ccbdf3/65b123a1cf55251bd879ebe1_logo-color.png" height="22" style="height: 22px;"><br></span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div
                    style="border: none; box-sizing: border-box; font-family: Lato, Helvetica, 'Helvetica Neue', Arial, 'sans-serif'; max-width: 640px; overflow: hidden; width: 100%; margin: 10px auto; margin-top: 10px; padding: 0px 20px;">
                    <h1 style="font-size: 32px; font-weight: 600; line-height: 38px; color: white; margin-bottom: 0px;">
                        <span class="font" style="font-family:verdana, sans-serif">${localizeMessage("password-reset.title")}<br></span>
                    </h1>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div
                    style="border: none; box-sizing: border-box; max-width: 640px; padding: 0px 20px; width: 100%; margin: 0px auto;">
                    <div
                        style="border: none; box-sizing: border-box; width: 100%; height: 300px; background-image: url('https://uploads-ssl.webflow.com/659e550456aad682f3ccbdf3/65b11918c055ac2c7f51d3b0_car-charging-talking.png'); background-repeat: no-repeat; background-position: center; background-size: cover;">
                        <span class="font" style="font-family:verdana, sans-serif"><br></span>
                    </div>
                </div>
            </td>
        </tr>    
        <tr style="background-color: #fff;">
            <td>
                <div
                    style="border: none; box-sizing: border-box; width: 100%; max-width: 640px; padding: 20px 20px; margin: 0px auto; color: #291D18;">
                    <h3 style="font-size: 20px; font-weight: 600; line-height: 20px;">
                        <span class="font" style="font-family:verdana, sans-serif">${localizeMessage("password-reset-content")}<br></span>
                    </h3>
                    <p style="line-height: 24px; margin-bottom: 30px;">
                    <span class="size" style="font-size: 14px; line-height: 24px; margin-bottom: 30px;"><span class="font" style="font-family:verdana, sans-serif">${localizeMessage("password-reset.content.description")}</span></span><span class="font" style="font-family:verdana, sans-serif"><br></span>
                </p>
                    <a href="{{ url }}"
                        style="font-size: 14px; color: #DCF730; cursor: pointer; line-height: normal; text-align: center; text-decoration: none; cursor: pointer; padding: 14px 18px; background-color: #12292F; border-radius: 6px; display: inline-block; margin-bottom: 10px;"><span class="font" style="font-family:verdana, sans-serif">${localizeMessage("password-reset.submit")}</span></a><span class="font" style="font-family:verdana, sans-serif"> </span>
                </div>
            </td>
        </tr>
        <tr style="background-color: #fff;">
            <td>
                <div
                    style="border: none; box-sizing: border-box; width: 100%; max-width: 640px; padding: 20px 20px; margin: 0px auto; color: #291D18; padding-top: 0px">
                    <hr>
                    <p style="line-height: 24px; margin-bottom: 30px; margin-top: 50px">
                        <span class="size" style="font-size: 14px; line-height: 20px; margin-bottom: 30px;"><span class="font" style="font-family:verdana, sans-serif">© Blossom BV • Maatschappelijke zetel • Liersesteenweg 4, 2800 Mechelen.<br>BTW BE0473.416.418 • RPR Antwerpen, afdeling Mechelen.<br /><a style="color: #291D18" href="https://www.blossom.be/privacy-policy">Privacy statement</a> | <a style="color: #291D18" href="www.blossom.be/terms-and-conditions">Algemene voorwaarden</a></span></span><span class="font" style="font-family:verdana, sans-serif"><br></span>
                    </p>
                </div>
            </td>
        </tr>
    </tbody>
</table>
`;

export default html;
