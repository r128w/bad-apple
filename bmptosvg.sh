echo woah, were converting the bmps in /frames/bmp to svgs in /frames/svg

echo lets get starrted gang \(cool emoji\)


max=2191

echo there are $max frames to convert waow


for i in `seq 1 $max`; do 
    if [ $(($i % 100)) -eq 0 ]; then
        echo lowk ey converting $i
    fi
    infile="bmp/$i.bmp"
    outfile="svg/$i.svg"
    ./potrace/potrace -s $infile -o $outfile
done


echo we lowkey done with $max frames... its joever

echo im in the thick of it everybody knows
