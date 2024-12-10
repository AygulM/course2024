import { Button } from "#shared/ui/Button";
import { CustomSelect } from "#shared/ui/CustomSelect/index";
import {
  CinemaIcon,
  RestIcon,
  MusicIcon,
  TheatreIcon,
  BarIcon,
  SaveIcon,
  ExitIcon,
  PictureIcon,
  ExitMiniIcon,
} from "#shared/ui/Icons/index";

/**
 * Контент модалки обновления метки
 */
export const getUpdateMarkModalContent = ({
  markInfo,
  url,
  method = "post",
  iconColor = "var(--colorBlack)",
}) => {
  return `
  
  
  
  
  <div class="updateModalContent" >
    <div class="exitBtn">
      ${Button({
        text: "",
        iconSlot: ExitIcon(),
      })}
    </div>
    <h3>Редактировать метку</h3>
    <p>${markInfo.title}</p>
    <form data-js-form=${JSON.stringify({ url, method, showModalAfterSuccess: "#modalSuccess", redirectUrlAfterSuccess: "/test.html", delayBeforeRedirect: 3000 })}>
      
      <div>
        <label>
          <p>Тип метки</p>
          ${CustomSelect({
            extraAttrs: [
              {
                name: "data-js-update-mark-info-select-type",
                value: markInfo.id,
              },
              {
                name: "name",
                value: "typeMark",
              },
            ],
            cfg: {
              preset: "default",
              itemSelectText: "",
              searchEnabled: false,
              choices: [
                {
                  value: "Бar",
                  label: "Бар",
                  selected: markInfo.type === "bars",
                  customProperties: {
                    icon: BarIcon({ iconColor: "var(--colorRed)" }),
                  },
                },
                {
                  value: "Ресторан",
                  label: "Ресторан",
                  selected: markInfo.type === "restaurant",
                  customProperties: {
                    icon: RestIcon({ iconColor: "var(--colorOrange)" }),
                  },
                },
                {
                  value: "Ночной клуб",
                  label: "Ночной клуб",
                  selected: markInfo.type === "trk",
                  customProperties: {
                    icon: MusicIcon({ iconColor: "var(--colorPictonBlue)" }),
                  },
                },
                {
                  value: "Театр",
                  label: "Театр",
                  selected: markInfo.type === "theatre",
                  customProperties: {
                    icon: TheatreIcon({ iconColor: "var(--colorVeronica)" }),
                  },
                },
                {
                  value: "Кино",
                  label: "Кино",
                  selected: markInfo.type === "cinema",
                  customProperties: {
                    icon: CinemaIcon({ iconColor: "var(--colorMantis)" }),
                  },
                },
              ],
            },
          })}
        </label>
        
        <label>
          <p>Комментарий пользователя</p>
          <textarea placeholder="${markInfo.comment}" name="comment"></textarea>
          </label>
        <label>
          <p>Фотографии</p>
          <div class="photoGallery">
            <div class="photoItem">
              <img src="assets/marksDetail/bar1.png" alt="Фотография 1" />
              ${Button({
                text: "",
                iconSlot: ExitMiniIcon(),
              })}
            </div>
            <div class="photoItem">
              <img src="assets/marksDetail/bar1.png" alt="Фотография 2" />
              ${Button({
                text: "",
                iconSlot: ExitMiniIcon(),
              })}
            </div>
            <div class="photoItem">
              <img src="assets/marksDetail/bar1.png" alt="Фотография 3" />
              ${Button({
                text: "",
                iconSlot: ExitMiniIcon(),
              })}
            </div>
            
          </div>
        </label>
        <label>
        <p>Добавить фото</p>
          <div class="addPhoto">
            <div class="inputAddPhoto">
              ${PictureIcon()}
              <span style="font-size: 10px;">
                Перетащите файл в эту область
              </span>
              <span style="font-size: 8px;">
                .jpg, .png, bmp, до 5 Мб
              </span>
              <input type="file" />
            </div>
          </div>
        </label>
        <div class="bottomBtn">
          ${Button({
            text: "Отмена",
            extraAttrs: [
              {
                name: "type",
                value: "reset",
              },
            ],
          })}
          ${Button({
            text: "Сохранить",
            iconSlot: SaveIcon(),
            extraAttrs: [
              {
                name: "type",
                value: "submit",
              },
            ],
          })}
          
        </div>
        
        
      </div>
    </form>
  </div>`;
};
