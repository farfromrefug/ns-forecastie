<script lang="ts">
    import { convertTime, titlecase } from '~/helpers/formatter';
    import { l } from '~/helpers/locale';
    import { Alert } from '~/services/api';

    export let alerts: Alert[];
</script>

<scrollview id="scrollView" class="bottomsheet" iosIgnoreSafeArea={true}>
    <stackLayout>
        {#each alerts as alert}
            <gridLayout class="alertView" columns="auto,*" rows="auto">
                <label verticalAlignment="top" marginLeft="10" color="#EFB644" fontSize="36" class="icon-btn" text="mdi-alert" />
                <label col="1" fontSize="14" padding="0 4 4 0" verticalAlignment="top" textWrap={true}>
                    <formattedString>
                        <span fontSize="17" text="{alert.event}{'\n'}" />
                    <span fontSize="17" text="{alert.sender_name}{'\n'}" />
                    <span text="{titlecase(l('expires'))}: {convertTime(alert.end, 'HH:mm dddd')}{'\n'}" />
                    <span color="#aaa" text={alert.description} />
                    </formattedString>
                    </label>
            </gridLayout>
        {/each}
    </stackLayout>
</scrollview>
