import * as React from "react";

interface IIconPropsp {
  width?: Number;
  height?: Number;
  icon: string;
  fill?: string;
}

function Icon({ icon, width = 16, height = 16, fill = "none" }: IIconPropsp) {
  switch (icon) {
    case "cell-clear":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            //@ts-ignore
            style={{ fill: "#C5C5C5 !important" }}
            d="M5 13.25H13.25V10.25H5V13.25ZM5.75 11H12.5V12.5H5.75V11ZM13.25 2.75V5.75H7.5605L6.833 5.0225L6.85625 5H12.5V3.5H8.2655L7.5155 2.75H13.25ZM8.3105 6.5H13.25V9.5H5V6.90125L5.75 7.65125V8.75H12.5V7.25H7.5605L8.3105 6.5Z"
          ></path>
          <path
            //@ts-ignore
            style={{ fill: "#F48771 !important" }}
            d="M5.77258 5.0225L7.25008 6.5L6.45508 7.295L4.97758 5.81825L3.50008 7.295L2.70508 6.5L4.18183 5.0225L2.70508 3.545L3.50008 2.75L4.97758 4.2275L6.45508 2.75L7.25008 3.545L5.77258 5.0225Z"
          ></path>
        </svg>
      );

    case "connecting":
      // @ts-ignore
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 100 100"
        >
          <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      );

    //
    case "disconnected":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.88672 9.20996L7.03418 11.0625L7.64941 11.6777L6.10449 13.2295C5.81738 13.5166 5.4847 13.7376 5.10645 13.8926C4.73275 14.0475 4.3431 14.125 3.9375 14.125C3.60482 14.125 3.28125 14.0749 2.9668 13.9746C2.6569 13.8698 2.36979 13.7171 2.10547 13.5166L0.745117 14.8701L0.129883 14.2549L1.4834 12.8945C1.28288 12.6302 1.13021 12.3431 1.02539 12.0332C0.92513 11.7188 0.875 11.3952 0.875 11.0625C0.875 10.6569 0.952474 10.2673 1.10742 9.89355C1.26237 9.5153 1.4834 9.18262 1.77051 8.89551L3.32227 7.35059L3.9375 7.96582L5.79004 6.11328L6.41211 6.72852L4.55273 8.58789L6.41211 10.4473L8.27148 8.58789L8.88672 9.20996ZM3.9375 13.25C4.22917 13.25 4.50716 13.1953 4.77148 13.0859C5.04036 12.972 5.27734 12.8125 5.48242 12.6074L6.41211 11.6777L3.32227 8.58789L2.39258 9.51758C2.1875 9.72266 2.02799 9.95964 1.91406 10.2285C1.80469 10.4928 1.75 10.7708 1.75 11.0625C1.75 11.3633 1.80697 11.6481 1.9209 11.917C2.03483 12.1813 2.18978 12.4137 2.38574 12.6143C2.58626 12.8102 2.81868 12.9652 3.08301 13.0791C3.35189 13.193 3.63672 13.25 3.9375 13.25ZM12.5166 3.10547C12.7171 3.36979 12.8675 3.65918 12.9678 3.97363C13.0726 4.28353 13.125 4.60482 13.125 4.9375C13.125 5.3431 13.0475 5.73503 12.8926 6.11328C12.7376 6.48698 12.5166 6.81738 12.2295 7.10449L10.6777 8.64941L6.35059 4.32227L7.89551 2.77051C8.18262 2.4834 8.51302 2.26237 8.88672 2.10742C9.26497 1.95247 9.6569 1.875 10.0625 1.875C10.3952 1.875 10.7165 1.92741 11.0264 2.03223C11.3408 2.13249 11.6302 2.28288 11.8945 2.4834L13.2549 1.12988L13.8701 1.74512L12.5166 3.10547ZM11.6074 6.48242C11.8125 6.27734 11.9697 6.04264 12.0791 5.77832C12.193 5.50944 12.25 5.22917 12.25 4.9375C12.25 4.63672 12.1908 4.35417 12.0723 4.08984C11.9583 3.82552 11.8011 3.59538 11.6006 3.39941C11.4046 3.19889 11.1745 3.04167 10.9102 2.92773C10.6458 2.80924 10.3633 2.75 10.0625 2.75C9.77083 2.75 9.49056 2.80697 9.22168 2.9209C8.95736 3.03027 8.72266 3.1875 8.51758 3.39258L7.58789 4.32227L10.6777 7.41211L11.6074 6.48242Z"></path>
        </svg>
      );

    case "connected":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.75 9.3125C2.75 8.9069 2.82747 8.51725 2.98242 8.14355C3.13737 7.7653 3.3584 7.43262 3.64551 7.14551L5.19727 5.60059L9.52441 9.92773L7.97949 11.4795C7.69238 11.7666 7.3597 11.9876 6.98145 12.1426C6.60775 12.2975 6.2181 12.375 5.8125 12.375C5.47982 12.375 5.15625 12.3249 4.8418 12.2246C4.5319 12.1198 4.24479 11.9671 3.98047 11.7666L1.74512 13.9951L1.12988 13.3799L3.3584 11.1445C3.15788 10.8802 3.00521 10.5931 2.90039 10.2832C2.80013 9.96875 2.75 9.64518 2.75 9.3125ZM5.8125 11.5C6.10417 11.5 6.38216 11.4453 6.64648 11.3359C6.91536 11.222 7.15234 11.0625 7.35742 10.8574L8.28711 9.92773L5.19727 6.83789L4.26758 7.76758C4.0625 7.97266 3.90299 8.20964 3.78906 8.47852C3.67969 8.74284 3.625 9.02083 3.625 9.3125C3.625 9.61328 3.68197 9.89811 3.7959 10.167C3.90983 10.4313 4.06478 10.6637 4.26074 10.8643C4.46126 11.0602 4.69368 11.2152 4.95801 11.3291C5.22689 11.443 5.51172 11.5 5.8125 11.5ZM11.7666 3.98047C11.9671 4.24479 12.1175 4.53418 12.2178 4.84863C12.3226 5.15853 12.375 5.47982 12.375 5.8125C12.375 6.2181 12.2975 6.61003 12.1426 6.98828C11.9876 7.36198 11.7666 7.69238 11.4795 7.97949L9.92773 9.52441L5.60059 5.19727L7.14551 3.64551C7.43262 3.3584 7.76302 3.13737 8.13672 2.98242C8.51497 2.82747 8.9069 2.75 9.3125 2.75C9.64518 2.75 9.96647 2.80241 10.2764 2.90723C10.5908 3.00749 10.8802 3.15788 11.1445 3.3584L13.3799 1.12988L13.9951 1.74512L11.7666 3.98047ZM10.8574 7.35742C11.0625 7.15234 11.2197 6.91764 11.3291 6.65332C11.443 6.38444 11.5 6.10417 11.5 5.8125C11.5 5.51172 11.4408 5.22917 11.3223 4.96484C11.2083 4.70052 11.0511 4.47038 10.8506 4.27441C10.6546 4.07389 10.4245 3.91667 10.1602 3.80273C9.89583 3.68424 9.61328 3.625 9.3125 3.625C9.02083 3.625 8.74056 3.68197 8.47168 3.7959C8.20736 3.90527 7.97266 4.0625 7.76758 4.26758L6.83789 5.19727L9.92773 8.28711L10.8574 7.35742Z"></path>
        </svg>
      );

    case "fast-forward":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 2.96094L15.2969 8L9 13.0781V2.96094ZM10 5.03906V10.9922L13.7031 8L10 5.03906ZM2 13.0781V2.96094L8.29688 8L2 13.0781ZM3 5.03906V10.9922L6.70312 8L3 5.03906Z" />
        </svg>
      );

    case "play-down":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 15 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.80002 0.0100098L0.0200195 0.42001V12.42L0.80002 12.84L9.80002 6.84001V6.01001L0.80002 0.0100098Z" />
          <path d="M11.85 14H11.14L8.64001 11.5L9.35001 10.79L11 12.44V7H12V12.45L13.65 10.8L14.36 11.51L11.85 14Z" />
        </svg>
      );

    case "play-up":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 15 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.80002 0.0100098L0.0200195 0.42001V12.42L0.80002 12.84L9.80002 6.84001V6.01001L0.80002 0.0100098Z" />
          <path d="M11.15 7.00001H11.86L14.36 9.50001L13.65 10.21L12 8.56001V14H11V8.55001L9.35003 10.2L8.64003 9.49001L11.15 7.00001Z" />
        </svg>
      );

    case "reload":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.75 8C12.75 10.4853 10.7353 12.5 8.24999 12.5C6.41795 12.5 4.84162 11.4052 4.13953 9.83416L2.74882 10.399C3.67446 12.5186 5.78923 14 8.24999 14C11.5637 14 14.25 11.3137 14.25 8C14.25 4.68629 11.5637 2 8.24999 2C6.3169 2 4.59732 2.91418 3.5 4.3338V2.5H2V6.5L2.75 7.25H6.25V5.75H4.35201C5.13008 4.40495 6.58436 3.5 8.24999 3.5C10.7353 3.5 12.75 5.51472 12.75 8Z" />
        </svg>
      );

    case "plus":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 7V8H8V14H7V8H1V7H7V1H8V7H14Z" />
        </svg>
      );

    case "play-circle":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width={width.toString()}
          height={height.toString()}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      );

    case "stop":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.75 3.25H3.25V12.75H12.75V3.25ZM2 2V14H14V2H2Z" />
        </svg>
      );

    case "play":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.99977 14V2.18091L12.9998 8.06215L3.99977 14ZM5.5 4.99997L10.3145 8.06215L5.5 11.1809V4.99997Z" />
        </svg>
      );

    case "cell-up":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 6.04042L3.02022 11.0202L2.31311 10.3131L7.64644 4.97976H8.35355L13.6869 10.3131L12.9798 11.0202L8 6.04042Z" />
        </svg>
      );

    case "cell-down":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 9.95954L3.02022 4.97976L2.31311 5.68686L7.64644 11.0202H8.35355L13.6869 5.68686L12.9798 4.97976L8 9.95954Z"
          />
        </svg>
      );

    case "delete":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.69231 2.92308H9.46154V3.84615H10.3846V2.92308C10.3846 2.41328 9.97134 2 9.46154 2H6.69231C6.18251 2 5.76923 2.41328 5.76923 2.92308V3.84615H6.69231V2.92308ZM3.92308 3.84616H3V4.76924H3.92308V13.0769L4.84616 14H11.3077L12.2308 13.0769V4.76924H13.1538V3.84616H12.2308H11.3077H4.84616H3.92308ZM4.84616 4.76924V13.0769H11.3077V4.76924H4.84616ZM6.69231 5.69232H5.76923V12.1539H6.69231V5.69232ZM7.61538 5.69232H8.53846V12.1539H7.61538V5.69232ZM10.3846 5.69232H9.46154V12.1539H10.3846V5.69232Z" />
        </svg>
      );

    case "markdown":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.76758 10.3789C5.82227 10.2227 5.87695 10.0684 5.93164 9.91602C5.99023 9.75977 6.05273 9.60742 6.11914 9.45898L8.42188 4.25H9.5V11.75H8.64453V6.7168C8.64453 6.4707 8.65039 6.22852 8.66211 5.99023C8.67383 5.74805 8.68555 5.50391 8.69727 5.25781C8.66602 5.37891 8.63281 5.50195 8.59766 5.62695C8.56641 5.75195 8.52539 5.87109 8.47461 5.98438L5.96094 11.75H5.53906L3.03125 6.03125C2.97656 5.91016 2.93164 5.7832 2.89648 5.65039C2.86523 5.51758 2.83008 5.38672 2.79102 5.25781C2.81055 5.50391 2.82227 5.75 2.82617 5.99609C2.83008 6.23828 2.83203 6.48242 2.83203 6.72852V11.75H2V4.25H3.13672L5.39844 9.48242C5.46094 9.62695 5.52344 9.77539 5.58594 9.92773C5.64844 10.0762 5.69727 10.2266 5.73242 10.3789H5.76758ZM13.8887 10.1387L12.125 11.9023L10.3613 10.1387L10.8887 9.61133L11.75 10.4668V4.25H12.5V10.4668L13.3613 9.61133L13.8887 10.1387Z" />
        </svg>
      );

    case "code":
      return (
        <svg
          width={width.toString()}
          height={height.toString()}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 2.98361V2.97184V2H5.91083C5.59743 2 5.29407 2.06161 5.00128 2.18473C4.70818 2.30798 4.44942 2.48474 4.22578 2.71498C4.00311 2.94422 3.83792 3.19498 3.73282 3.46766L3.73233 3.46898C3.63382 3.7352 3.56814 4.01201 3.53533 4.29917L3.53519 4.30053C3.50678 4.5805 3.4987 4.86844 3.51084 5.16428C3.52272 5.45379 3.52866 5.74329 3.52866 6.03279C3.52866 6.23556 3.48974 6.42594 3.412 6.60507L3.4116 6.60601C3.33687 6.78296 3.23423 6.93866 3.10317 7.07359C2.97644 7.20405 2.82466 7.31055 2.64672 7.3925C2.4706 7.46954 2.28497 7.5082 2.08917 7.5082H2V7.6V8.4V8.4918H2.08917C2.28465 8.4918 2.47001 8.53238 2.64601 8.61334L2.64742 8.61396C2.82457 8.69157 2.97577 8.79762 3.10221 8.93161L3.10412 8.93352C3.23428 9.0637 3.33659 9.21871 3.41129 9.39942L3.41201 9.40108C3.48986 9.58047 3.52866 9.76883 3.52866 9.96721C3.52866 10.2567 3.52272 10.5462 3.51084 10.8357C3.4987 11.1316 3.50677 11.4215 3.53516 11.7055L3.53535 11.7072C3.56819 11.9903 3.63387 12.265 3.73232 12.531L3.73283 12.5323C3.83793 12.805 4.00311 13.0558 4.22578 13.285C4.44942 13.5153 4.70818 13.692 5.00128 13.8153C5.29407 13.9384 5.59743 14 5.91083 14H6V13.2V13.0164H5.91083C5.71095 13.0164 5.52346 12.9777 5.34763 12.9008C5.17396 12.8191 5.02194 12.7126 4.89086 12.5818C4.76386 12.4469 4.66104 12.2911 4.58223 12.1137C4.50838 11.9346 4.47134 11.744 4.47134 11.541C4.47134 11.3127 4.4753 11.0885 4.48321 10.8686C4.49125 10.6411 4.49127 10.4195 4.48324 10.2039C4.47914 9.98246 4.46084 9.76883 4.42823 9.56312C4.39513 9.35024 4.33921 9.14757 4.26039 8.95536C4.18091 8.76157 4.07258 8.57746 3.93616 8.40298C3.82345 8.25881 3.68538 8.12462 3.52283 8C3.68538 7.87538 3.82345 7.74119 3.93616 7.59702C4.07258 7.42254 4.18091 7.23843 4.26039 7.04464C4.33913 6.85263 4.39513 6.65175 4.42826 6.44285C4.46082 6.2333 4.47914 6.01973 4.48324 5.80219C4.49127 5.58262 4.49125 5.36105 4.48321 5.13749C4.4753 4.9134 4.47134 4.68725 4.47134 4.45902C4.47134 4.26019 4.50833 4.07152 4.58238 3.89205C4.66135 3.71034 4.76421 3.55475 4.89086 3.42437C5.02193 3.28942 5.17461 3.18275 5.34802 3.10513C5.5238 3.02427 5.71113 2.98361 5.91083 2.98361H6ZM10 13.0164V13.0282V14H10.0892C10.4026 14 10.7059 13.9384 10.9987 13.8153C11.2918 13.692 11.5506 13.5153 11.7742 13.285C11.9969 13.0558 12.1621 12.805 12.2672 12.5323L12.2677 12.531C12.3662 12.2648 12.4319 11.988 12.4647 11.7008L12.4648 11.6995C12.4932 11.4195 12.5013 11.1316 12.4892 10.8357C12.4773 10.5462 12.4713 10.2567 12.4713 9.96721C12.4713 9.76444 12.5103 9.57406 12.588 9.39493L12.5884 9.39399C12.6631 9.21704 12.7658 9.06134 12.8968 8.92642C13.0236 8.79595 13.1753 8.68945 13.3533 8.6075C13.5294 8.53046 13.715 8.4918 13.9108 8.4918H14V8.4V7.6V7.5082H13.9108C13.7153 7.5082 13.53 7.46762 13.354 7.38666L13.3526 7.38604C13.1754 7.30844 13.0242 7.20238 12.8978 7.06839L12.8959 7.06648C12.7657 6.9363 12.6634 6.78129 12.5887 6.60058L12.588 6.59892C12.5101 6.41953 12.4713 6.23117 12.4713 6.03279C12.4713 5.74329 12.4773 5.45379 12.4892 5.16428C12.5013 4.86842 12.4932 4.57848 12.4648 4.29454L12.4646 4.29285C12.4318 4.00971 12.3661 3.73502 12.2677 3.46897L12.2672 3.46766C12.1621 3.19499 11.9969 2.94422 11.7742 2.71498C11.5506 2.48474 11.2918 2.30798 10.9987 2.18473C10.7059 2.06161 10.4026 2 10.0892 2H10V2.8V2.98361H10.0892C10.2891 2.98361 10.4765 3.0223 10.6524 3.09917C10.826 3.18092 10.9781 3.28736 11.1091 3.41823C11.2361 3.55305 11.339 3.70889 11.4178 3.88628C11.4916 4.0654 11.5287 4.25596 11.5287 4.45902C11.5287 4.68727 11.5247 4.91145 11.5168 5.13142C11.5088 5.35894 11.5087 5.58049 11.5168 5.79605C11.5209 6.01754 11.5392 6.23117 11.5718 6.43688C11.6049 6.64976 11.6608 6.85243 11.7396 7.04464C11.8191 7.23843 11.9274 7.42254 12.0638 7.59702C12.1765 7.74119 12.3146 7.87538 12.4772 8C12.3146 8.12462 12.1765 8.25881 12.0638 8.40298C11.9274 8.57746 11.8191 8.76157 11.7396 8.95536C11.6609 9.14737 11.6049 9.34825 11.5717 9.55715C11.5392 9.7667 11.5209 9.98027 11.5168 10.1978C11.5087 10.4174 11.5087 10.6389 11.5168 10.8625C11.5247 11.0866 11.5287 11.3128 11.5287 11.541C11.5287 11.7398 11.4917 11.9285 11.4176 12.1079C11.3386 12.2897 11.2358 12.4452 11.1091 12.5756C10.9781 12.7106 10.8254 12.8173 10.652 12.8949C10.4762 12.9757 10.2889 13.0164 10.0892 13.0164H10Z" />
        </svg>
      );

    default:
      return <span>Icon not found</span>;
  }
}

export default Icon;