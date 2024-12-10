import { PlaceSwitchGroup } from "#features/PlaceSwitchGroup";
import { Button } from "#shared/ui/Button/index";
// import { CustomSelect } from "#shared/ui/CustomSelect/index";
import { LocationIcon, RouteIcon, DirectIcon } from "#shared/ui/Icons/index";
// import { Switch } from "#shared/ui/Switch/index";

/**
 * Страница приложения
 * @return {string}
 */
const IndexPage = () => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home Page</title>
    </head>
    <body>
      <main>
        ${PlaceSwitchGroup()}          
        <div class="mapSection">
          <div id="map1" class="yandexMap" style="aspect-ratio: 16 / 9"></div>
        
          <div class="mapBtnGroup">
            ${Button({ text: "Добавить метку", iconSlot: LocationIcon(), extraClasses: ["btn--isBlackIcon"] })}
            ${Button({ text: "Построить маршрут", iconSlot: RouteIcon(), extraClasses: ["btn--isBlackIcon"] })}
            ${Button({ text: "Мои маршруты", iconSlot: DirectIcon(), extraClasses: ["btn--isBlackIcon"] })}
          </div>
        </div>
      </main>

      <form>
          
      </form>

      <div style="display: none">
        <div id="modalSuccess">
            <p>Успешно!</p>
        </div>
        <div id="modalError">
          <p>Не успешно!</p>
        </div>
      </div>








      
    </body>
  </html>
`;

export default IndexPage;
