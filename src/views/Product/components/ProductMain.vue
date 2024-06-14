<template>
    <div class="container">
        <div class="row py-4">
            <div class="col-11">
                <h2>{{product.name}}</h2>
            </div>
            <div class="col-1">
                <label class="ui-bookmark">
                    <input type="checkbox" />
                    <div class="bookmark">
                        <svg viewBox="0 0 16 16" style="margin-top:4px" class="bi bi-heart-fill" height="20" width="25" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                </label>
            </div>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                {{product.address}}
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
                {{product.phone}}
            </p>
            <div class="row gallery-item">
                <div class="col-md-12 col-sm-12 mb-4">
                    <img :src="product.img" class="img-fluid portrait-image" alt="">
                </div>
            </div>
            <p>{{product.introduction}}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* 图片圆角 */
img {
    border-radius: 10px;
    width: 100%;
    height: 650px;
    object-fit: cover; /* 确保图片不会被压缩 */
}

/* 爱心 */
.ui-bookmark {
    --icon-size: 24px;
    --icon-secondary-color: rgb(162, 162, 162);
    --icon-hover-color: rgb(196, 196, 196);
    --icon-primary-color: rgb(252, 54, 54);
    --icon-circle-border: 1px solid var(--icon-primary-color);
    --icon-circle-size: 35px;
    --icon-anmt-duration: 0.3s;
}

.ui-bookmark input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: none;
}

.ui-bookmark .bookmark {
    width: var(--icon-size);
    height: auto;
    fill: var(--icon-secondary-color);
    cursor: pointer;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    transition: 0.2s;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    -webkit-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;
}

.bookmark::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    -webkit-box-shadow: 0 30px 0 -4px var(--icon-primary-color), 30px 0 0 -4px var(--icon-primary-color), 0 -30px 0 -4px var(--icon-primary-color), -30px 0 0 -4px var(--icon-primary-color), -22px 22px 0 -4px var(--icon-primary-color), -22px -22px 0 -4px var(--icon-primary-color), 22px -22px 0 -4px var(--icon-primary-color), 22px 22px 0 -4px var(--icon-primary-color);
    box-shadow: 0 30px 0 -4px var(--icon-primary-color), 30px 0 0 -4px var(--icon-primary-color), 0 -30px 0 -4px var(--icon-primary-color), -30px 0 0 -4px var(--icon-primary-color), -22px 22px 0 -4px var(--icon-primary-color), -22px -22px 0 -4px var(--icon-primary-color), 22px -22px 0 -4px var(--icon-primary-color), 22px 22px 0 -4px var(--icon-primary-color);
    border-radius: 50%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    padding: 1px;
}

.bookmark::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: var(--icon-circle-border);
    opacity: 0;
}

/* actions */

.ui-bookmark:hover .bookmark {
    fill: var(--icon-hover-color);
}

.ui-bookmark input:checked+.bookmark::after {
    -webkit-animation: circles var(--icon-anmt-duration) cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    animation: circles var(--icon-anmt-duration) cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    -webkit-animation-delay: var(--icon-anmt-duration);
    animation-delay: var(--icon-anmt-duration);
}

.ui-bookmark input:checked+.bookmark {
    fill: var(--icon-primary-color);
    -webkit-animation: bookmark var(--icon-anmt-duration) forwards;
    animation: bookmark var(--icon-anmt-duration) forwards;
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
}

.ui-bookmark input:checked+.bookmark::before {
    -webkit-animation: circle var(--icon-anmt-duration) cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    animation: circle var(--icon-anmt-duration) cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    -webkit-animation-delay: var(--icon-anmt-duration);
    animation-delay: var(--icon-anmt-duration);
}

@-webkit-keyframes bookmark {
    50% {
        -webkit-transform: scaleY(0.6);
        transform: scaleY(0.6);
    }

    100% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
}

@keyframes bookmark {
    50% {
        -webkit-transform: scaleY(0.6);
        transform: scaleY(0.6);
    }

    100% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
}

@-webkit-keyframes circle {
    from {
        width: 0;
        height: 0;
        opacity: 0;
    }

    90% {
        width: var(--icon-circle-size);
        height: var(--icon-circle-size);
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes circle {
    from {
        width: 0;
        height: 0;
        opacity: 0;
    }

    90% {
        width: var(--icon-circle-size);
        height: var(--icon-circle-size);
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@-webkit-keyframes circles {
    from {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    40% {
        opacity: 1;
    }

    to {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        opacity: 0;
    }
}

@keyframes circles {
    from {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    40% {
        opacity: 1;
    }

    to {
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        opacity: 0;
    }
}
</style>
